"""
TTS Service - edge-tts を使用した音声合成
"""

import hashlib
import edge_tts
from pathlib import Path


class TTSService:
    def __init__(self, cache_dir: Path):
        self.cache_dir = cache_dir

    def _get_cache_path(self, text: str, voice: str, rate: str) -> Path:
        """キャッシュファイルパスを生成"""
        key = f"{text}_{voice}_{rate}"
        filename = hashlib.md5(key.encode()).hexdigest() + ".mp3"
        return self.cache_dir / filename

    async def synthesize(self, text: str, voice: str = "en-US-JennyNeural", rate: str = "+0%") -> str:
        """テキストを音声に変換し、キャッシュファイルパスを返す"""
        cache_path = self._get_cache_path(text, voice, rate)

        # キャッシュがあればそれを返す
        if cache_path.exists():
            return str(cache_path)

        # edge-ttsで音声生成
        communicate = edge_tts.Communicate(text, voice, rate=rate)
        await communicate.save(str(cache_path))

        return str(cache_path)

    async def list_voices(self) -> list:
        """利用可能な英語音声一覧を返す"""
        voices = await edge_tts.list_voices()
        english_voices = [
            {
                "name": v["Name"],
                "gender": v["Gender"],
                "locale": v["Locale"],
                "friendly_name": v.get("FriendlyName", v["Name"])
            }
            for v in voices
            if v["Locale"].startswith("en-")
        ]
        return english_voices
