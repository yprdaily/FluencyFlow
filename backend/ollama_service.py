"""
Ollama Service - ローカルLLMとの会話
"""

import json
import httpx


SYSTEM_PROMPT = """You are a friendly English conversation partner helping a Japanese person practice English for their upcoming trip to Hawaii. 

Rules:
- Keep your responses concise (1-3 sentences)
- Use simple, natural English appropriate for the learner's level
- If the user makes a grammar mistake, gently correct it in your response
- Include Hawaii-specific vocabulary and expressions when relevant
- After your English response, add a brief Japanese translation in parentheses
- Be encouraging and patient

Example:
User: I want go to beach tomorrow.
You: That sounds fun! You should say "I want TO go to the beach tomorrow." Which beach are you thinking of visiting? Waikiki is really popular!
(楽しそうですね！「I want to go to the beach tomorrow」が正しい言い方です。どのビーチに行こうと思っていますか？ワイキキはとても人気ですよ！)"""


class OllamaService:
    def __init__(self, base_url: str = "http://localhost:11434"):
        self.base_url = base_url
        self.model = "llama3.2"

    async def check_health(self) -> bool:
        """Ollamaが利用可能か確認"""
        try:
            async with httpx.AsyncClient(timeout=3.0) as client:
                response = await client.get(f"{self.base_url}/api/tags")
                return response.status_code == 200
        except Exception:
            return False

    async def chat(self, message: str, context: str = "", history: list = None) -> dict:
        """Ollamaでチャット"""
        if history is None:
            history = []

        messages = [{"role": "system", "content": SYSTEM_PROMPT}]

        if context:
            messages.append({
                "role": "system",
                "content": f"Current conversation context: {context}"
            })

        for h in history[-10:]:  # 直近10メッセージのみ
            messages.append(h)

        messages.append({"role": "user", "content": message})

        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                response = await client.post(
                    f"{self.base_url}/api/chat",
                    json={
                        "model": self.model,
                        "messages": messages,
                        "stream": False,
                        "options": {
                            "temperature": 0.7,
                            "num_predict": 256,
                        }
                    }
                )

                if response.status_code != 200:
                    raise Exception(f"Ollama returned status {response.status_code}")

                data = response.json()
                return {
                    "reply": data["message"]["content"],
                    "model": self.model
                }
        except httpx.ConnectError:
            raise Exception("Ollamaに接続できません。Ollamaが起動しているか確認してください。")
        except Exception as e:
            raise Exception(f"AI会話エラー: {str(e)}")
