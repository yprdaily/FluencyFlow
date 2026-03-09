"""
FluencyFlow - バックエンドサーバー
FastAPI + edge-tts + Ollama プロキシ + SQLite辞書API
"""

import os
import hashlib
import asyncio
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

from tts_service import TTSService
from ollama_service import OllamaService
from dictionary_service import dictionary_service

app = FastAPI(title="FluencyFlow Backend")

# CORS設定（ローカル開発用）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# サービス初期化
CACHE_DIR = Path(__file__).parent.parent / "audio_cache"
CACHE_DIR.mkdir(exist_ok=True)

tts_service = TTSService(cache_dir=CACHE_DIR)
ollama_service = OllamaService()


class TTSRequest(BaseModel):
    text: str
    voice: str = "en-US-JennyNeural"
    rate: str = "+0%"


class ChatRequest(BaseModel):
    message: str
    context: str = ""
    history: list = []


class WordAddRequest(BaseModel):
    word: str
    ja: str
    pos: str = ""
    phonetic: str = ""
    example: str = ""
    example_ja: str = ""
    level: str = "B1"


# =============================================
# ヘルスチェック
# =============================================
@app.get("/api/health")
async def health_check():
    """ヘルスチェック"""
    ollama_ok = await ollama_service.check_health()
    word_count = dictionary_service.get_word_count()
    return {
        "status": "ok",
        "tts": True,
        "ollama": ollama_ok,
        "dictionary_words": word_count
    }


# =============================================
# TTS (音声合成)
# =============================================
@app.post("/api/tts")
async def text_to_speech(request: TTSRequest):
    """テキストを音声に変換"""
    try:
        audio_path = await tts_service.synthesize(
            text=request.text,
            voice=request.voice,
            rate=request.rate
        )
        return FileResponse(
            audio_path,
            media_type="audio/mpeg",
            filename="speech.mp3"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# =============================================
# AI会話 (Ollama)
# =============================================
@app.post("/api/chat")
async def chat(request: ChatRequest):
    """AI会話（Ollama経由）"""
    try:
        response = await ollama_service.chat(
            message=request.message,
            context=request.context,
            history=request.history
        )
        return JSONResponse(content=response)
    except Exception as e:
        raise HTTPException(status_code=503, detail=str(e))


@app.get("/api/voices")
async def list_voices():
    """利用可能な音声一覧"""
    voices = await tts_service.list_voices()
    return {"voices": voices}


# =============================================
# 辞書API（SQLite + AI拡張）
# =============================================
@app.get("/api/dictionary/search")
async def dictionary_search(
    q: str = Query("", description="検索クエリ（部分一致）"),
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0)
):
    """辞書検索（部分一致）"""
    results = dictionary_service.search(q, limit=limit, offset=offset)
    total = dictionary_service.get_word_count()
    return {"results": results, "total": total, "query": q}


@app.get("/api/dictionary/levels")
async def dictionary_levels():
    """CEFRレベルごとの単語数サマリー"""
    return {"levels": dictionary_service.get_levels_summary()}


@app.get("/api/dictionary/level/{level}")
async def dictionary_by_level(
    level: str,
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0)
):
    """特定レベルの単語一覧"""
    results = dictionary_service.get_by_level(level, limit=limit, offset=offset)
    return {"results": results, "level": level}


@app.get("/api/dictionary/quiz")
async def get_dictionary_quiz(level: str = "B1", count: int = 10):
    """DBの単語から動的な4択クイズを生成する"""
    import random
    # 必要数の4倍の単語を取得（ターゲット + ダミー選択肢用）
    words = dictionary_service.get_random_words(level, limit=count * 4)
    if len(words) < count:
        return {"quiz": []}
    
    targets = words[:count]
    distractors_pool = [w['ja'] for w in words[count:]]
    
    quiz_data = []
    for target in targets:
        options = [target['ja']]
        # ランダムなダミー選択肢を3つ選ぶ
        if len(distractors_pool) >= 3:
            distractors = random.sample(distractors_pool, 3)
        else:
            distractors = ['名詞', '動詞', '形容詞']
        
        options.extend(distractors)
        random.shuffle(options)
        answer_idx = options.index(target['ja'])
        
        quiz_data.append({
            "type": "choice",
            "question": f"「{target['word']}」の意味は？",
            "options": options,
            "answer": answer_idx,
            "explanation": f"{target['word']} の意味は「{target['ja']}」です。 (品詞: {target['pos']})"
        })
        
    return {"quiz": quiz_data}


@app.get("/api/dictionary/word/{word}")
async def dictionary_lookup(word: str):
    """単語の正確なルックアップ。DBに無い場合はAI生成を試みる。"""
    result = dictionary_service.get_word(word.lower().strip())
    if result:
        return {"result": result, "source": "db"}

    # AIが利用可能ならその場で単語情報を生成
    if ollama_service.available:
        try:
            ai_result = await _ai_generate_word(word)
            if ai_result:
                dictionary_service.add_word(**ai_result)
                saved = dictionary_service.get_word(word.lower().strip())
                return {"result": saved, "source": "ai"}
        except Exception:
            pass

    raise HTTPException(status_code=404, detail=f"'{word}' は辞書に見つかりません。Ollamaが起動していればAI生成されます。")


@app.post("/api/dictionary/add")
async def dictionary_add(request: WordAddRequest):
    """手動で辞書に単語を追加"""
    success = dictionary_service.add_word(
        word=request.word,
        ja=request.ja,
        pos=request.pos,
        phonetic=request.phonetic,
        example=request.example,
        example_ja=request.example_ja,
        level=request.level,
        source="manual"
    )
    if success:
        return {"message": f"'{request.word}' を辞書に追加しました。"}
    raise HTTPException(status_code=409, detail="すでに存在するか、追加に失敗しました。")


@app.get("/api/dictionary/stats")
async def dictionary_stats():
    """辞書の統計情報"""
    levels = dictionary_service.get_levels_summary()
    total = dictionary_service.get_word_count()
    return {"total": total, "levels": levels}


async def _ai_generate_word(word: str) -> dict | None:
    """OllamaにJSON形式で単語情報を生成させる"""
    prompt = f"""You are a dictionary assistant. Generate word information for "{word}" in the following JSON format ONLY. No other text.
{{
  "word": "{word}",
  "ja": "<Japanese meaning>",
  "pos": "<part of speech in Japanese, e.g. 名詞, 動詞, 形容詞>",
  "phonetic": "<IPA phonetic notation>",
  "example": "<one natural English example sentence>",
  "example_ja": "<Japanese translation of the example>",
  "level": "<CEFR level: A1, A2, B1, B2, or C1>"
}}"""

    try:
        response = await ollama_service.chat(
            message=prompt,
            context="You are a bilingual English-Japanese dictionary. Respond ONLY with valid JSON."
        )
        # responseからJSONを抽出
        import json
        import re
        json_match = re.search(r'\{[^}]+\}', response, re.DOTALL)
        if json_match:
            data = json.loads(json_match.group())
            data["source"] = "ai"
            return data
    except Exception:
        pass
    return None


# =============================================
# 起動
# =============================================
if __name__ == "__main__":
    import uvicorn
    print("=" * 50)
    print("  FluencyFlow バックエンド起動中...")
    print("  http://localhost:8080")
    print("=" * 50)
    uvicorn.run(app, host="127.0.0.1", port=8080, log_level="info")
