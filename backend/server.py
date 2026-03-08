"""
Hawaii English - バックエンドサーバー
FastAPI + edge-tts + Ollama プロキシ
"""

import os
import hashlib
import asyncio
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

from tts_service import TTSService
from ollama_service import OllamaService

app = FastAPI(title="Hawaii English Backend")

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


@app.get("/api/health")
async def health_check():
    """ヘルスチェック"""
    ollama_ok = await ollama_service.check_health()
    return {
        "status": "ok",
        "tts": True,
        "ollama": ollama_ok
    }


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


if __name__ == "__main__":
    import uvicorn
    print("=" * 50)
    print("  Hawaii English バックエンド起動中...")
    print("  http://localhost:8765")
    print("=" * 50)
    uvicorn.run(app, host="127.0.0.1", port=8765, log_level="info")
