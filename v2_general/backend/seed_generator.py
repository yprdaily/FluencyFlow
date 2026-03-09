import asyncio
import json
import sqlite3
import re
from ollama_service import OllamaService

ollama = OllamaService()
DB_FILE = "dictionary.db"

# CEFR Categories to generate
LEVELS = ["B1", "B2", "C1"]
WORDS_PER_LEVEL = 50  # Generating 50 verbs, nouns, adjectives etc. per level

PROMPT_TEMPLATE = """
あなたはプロの英語教師です。CEFR {level} レベルの重要な英単語を {count} 個生成してください。
以下の厳格なJSONフォーマットのみを出力してください（Markdownのバッククォート等は一切不要です）。
出力フォーマット:
[
  {{"word": "単語1", "ja": "日本語の意味", "pos": "品詞（名詞/動詞/形容詞など）", "phonetic": "/発音記号/", "example": "短い英語の例文", "example_ja": "例文の日本語訳"}},
  ...
]
必ず指定されたJSONの配列形式のみを返し、前後に他のテキストを含めないでください。
"""

import httpx

async def generate_words_for_level(level, count):
    print(f"[{level}] {count}単語を生成中...")
    prompt = PROMPT_TEMPLATE.format(level=level, count=count)
    response = ''
    try:
        async with httpx.AsyncClient(timeout=120.0) as client:
            res = await client.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "llama3.1:8b",
                    "prompt": prompt,
                    "stream": False,
                    "options": {
                        "temperature": 0.7,
                        "num_predict": 4096
                    }
                }
            )
            
            if res.status_code != 200:
                print(f"[{level}] 生成エラー: API returned {res.status_code}")
                return []
                
            data = res.json()
            response = data.get("response", "")
            
        # Clean response (remove markdown backticks if present)
        clean_json = re.sub(r'```json\s*', '', response)
        clean_json = re.sub(r'\s*```', '', clean_json)
        
        words = json.loads(clean_json)
        print(f"[{level}] {len(words)}単語の生成に成功！")
        return words
    except Exception as e:
        print(f"[{level}] 生成エラー: {e}")
        # print(f"Raw response: {response}")
        return []

def insert_words_to_db(words, level):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    inserted = 0
    for w in words:
        try:
            c.execute('''
                INSERT OR IGNORE INTO words 
                (word, ja, pos, phonetic, example, example_ja, level, source) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                w.get('word', ''),
                w.get('ja', ''),
                w.get('pos', ''),
                w.get('phonetic', ''),
                w.get('example', ''),
                w.get('example_ja', ''),
                level,
                'ai_seed'
            ))
            if c.rowcount > 0:
                inserted += 1
        except Exception as e:
            pass
            
    conn.commit()
    conn.close()
    return inserted

def get_score_for_level(level):
    scores = {'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6}
    return scores.get(level, 0)

async def main():
    total_added = 0
    for level in LEVELS:
        # We do this in smaller batches to avoid LLM token limits and JSON truncation
        batches = 5
        batch_size = 20
        
        for i in range(batches):
            print(f"--- {level} バッチ {i+1}/{batches} ---")
            words = await generate_words_for_level(level, batch_size)
            if words:
                count = insert_words_to_db(words, level)
                total_added += count
                print(f"データベースに {count} 語を追加しました。")
    
    print(f"\n完了！合計 {total_added} 語を新規追加しました。")

if __name__ == "__main__":
    asyncio.run(main())
