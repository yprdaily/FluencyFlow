"""
FluencyFlow - SQLite 辞書サービス
数万語の英単語データをSQLiteに格納し、検索・ページネーション・AI自動拡張を提供。
"""

import sqlite3
import json
import asyncio
from pathlib import Path


DB_PATH = Path(__file__).parent / "dictionary.db"


class DictionaryService:
    """SQLiteベースの無制限英語辞書"""

    def __init__(self):
        self.db_path = str(DB_PATH)
        self._init_db()

    def _get_conn(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def _init_db(self):
        """テーブル初期化"""
        conn = self._get_conn()
        conn.execute("""
            CREATE TABLE IF NOT EXISTS words (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                word TEXT NOT NULL UNIQUE,
                ja TEXT NOT NULL,
                pos TEXT NOT NULL DEFAULT '',
                phonetic TEXT NOT NULL DEFAULT '',
                example TEXT NOT NULL DEFAULT '',
                example_ja TEXT NOT NULL DEFAULT '',
                level TEXT NOT NULL DEFAULT 'B1',
                source TEXT NOT NULL DEFAULT 'seed',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.execute("CREATE INDEX IF NOT EXISTS idx_words_word ON words(word)")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_words_level ON words(level)")
        conn.commit()
        conn.close()

    def get_word_count(self) -> int:
        conn = self._get_conn()
        count = conn.execute("SELECT COUNT(*) FROM words").fetchone()[0]
        conn.close()
        return count

    def search(self, query: str, limit: int = 50, offset: int = 0) -> list:
        """ワイルドカード検索（部分一致対応）"""
        conn = self._get_conn()
        rows = conn.execute(
            "SELECT * FROM words WHERE word LIKE ? ORDER BY word LIMIT ? OFFSET ?",
            (f"%{query}%", limit, offset)
        ).fetchall()
        conn.close()
        return [dict(row) for row in rows]

    def get_by_level(self, level: str, limit: int = 50, offset: int = 0) -> list:
        """CEFRレベル別フィルタ"""
        conn = self._get_conn()
        rows = conn.execute(
            "SELECT * FROM words WHERE level = ? ORDER BY word LIMIT ? OFFSET ?",
            (level, limit, offset)
        ).fetchall()
        conn.close()
        return [dict(row) for row in rows]

    def get_levels_summary(self) -> list:
        """各レベルの語彙数を返す"""
        conn = self._get_conn()
        rows = conn.execute(
            "SELECT level, COUNT(*) as count FROM words GROUP BY level ORDER BY level"
        ).fetchall()
        conn.close()
        return [dict(row) for row in rows]

    def get_word(self, word: str) -> dict | None:
        """単語を正確に引く"""
        conn = self._get_conn()
        row = conn.execute(
            "SELECT * FROM words WHERE word = ?", (word,)
        ).fetchone()
        conn.close()
        return dict(row) if row else None

    def add_word(self, word: str, ja: str, pos: str = '', phonetic: str = '',
                 example: str = '', example_ja: str = '', level: str = 'B1',
                 source: str = 'ai') -> bool:
        """単語をDBに追加"""
        conn = self._get_conn()
        try:
            conn.execute(
                """INSERT OR IGNORE INTO words (word, ja, pos, phonetic, example, example_ja, level, source)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
                (word.lower().strip(), ja, pos, phonetic, example, example_ja, level, source)
            )
            conn.commit()
            return True
        except Exception:
            return False
        finally:
            conn.close()

    def bulk_insert(self, words: list[dict]):
        """初期シードデータの一括投入"""
        conn = self._get_conn()
        conn.executemany(
            """INSERT OR IGNORE INTO words (word, ja, pos, phonetic, example, example_ja, level, source)
               VALUES (:word, :ja, :pos, :phonetic, :example, :example_ja, :level, :source)""",
            words
        )
        conn.commit()
        conn.close()

    def get_random_words(self, level: str, limit: int = 40) -> list[dict]:
        """クイズ用に指定レベルの単語をランダムに取得"""
        conn = self._get_conn()
        cur = conn.cursor()
        cur.execute("SELECT * FROM words WHERE level = ? ORDER BY RANDOM() LIMIT ?", (level, limit))
        rows = cur.fetchall()
        conn.close()
        return [dict(row) for row in rows]


# シングルトン
dictionary_service = DictionaryService()
