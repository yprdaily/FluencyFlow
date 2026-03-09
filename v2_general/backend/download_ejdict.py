import sqlite3
import json
import string
from pathlib import Path

DB_FILE = Path(__file__).parent / "dictionary.db"
JSON_DIR = Path(__file__).parent / "node_modules" / "ejdict" / "lib" / "data" / "dictionary"

def seed_massive_dictionary():
    print("ローカルの ejdict npm パッケージから英和辞典データを読み取ります...")
    words_data = []
    
    for letter in string.ascii_lowercase:
        json_file = JSON_DIR / f"{letter}.json"
        if not json_file.exists():
            continue
        
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            for word, ja in data.items():
                if len(word) > 50:
                    continue
                words_data.append((
                    word.strip(),      # word
                    ja.strip(),        # ja (meaning)
                    '',                # pos
                    '',                # phonetic
                    '',                # example
                    '',                # example_ja
                    'General',         # level
                    'ejdict'           # source
                ))
        except Exception as e:
            print(f"ファイル {json_file.name}の読み込みに失敗しました: {e}")
            
    print(f"合計 {len(words_data)} 語のデータを取得しました。データベースに登録中...")

    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    count_before = c.execute("SELECT COUNT(*) FROM words").fetchone()[0]
    
    try:
        c.executemany('''
            INSERT OR IGNORE INTO words 
            (word, ja, pos, phonetic, example, example_ja, level, source) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', words_data)
        conn.commit()
        count_after = c.execute("SELECT COUNT(*) FROM words").fetchone()[0]
        added = count_after - count_before
        print(f"✅ 登録完了: {added} 語の新規英単語がデータベースに追加されました！（総語数: {count_after}語）")
    except Exception as e:
        print(f"[ERROR] データベース登録中にエラーが発生しました: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    seed_massive_dictionary()
