# 🚀 FluencyFlow (Formerly Hawaii English App)

短期集中旅行用アプリから進化した、**真に英語が話せるようになるための総合型・長期実践学習アプリ**です。

## 🌟 主な特長 (V2 の新機能)

1. **📚 無制限・究極の英単語帳 (ハイブリッド辞書エンジン)**
   - パブリックドメインの巨大な英和辞典データベース（ejdict: 約46,000語）を SQLite 経由でフロントエンドに統合。
   - ブラウザを重くすることなく、ページネーションと検索機能で超巨大データにアクセス可能。
   - **AI自動生成**: 辞書に未登録の単語を検索した場合、バックエンドの **Ollama (llama3.1:8b)** が自動的に意味・発音記号・品詞・例文を生成し、ローカルDBに保存し続けます。これにより「この世のすべての英単語」に実質的に対応しています。
2. **🏆 CEFRレベル別ランダムクイズ機能**
   - 4万語超のデータベースから、A1〜C1の難易度（CEFRレベル）別にランダムな4択クイズを出題。ダミーの選択肢も毎回シャッフルされ、何度でも新鮮なクイズに挑戦できます。
3. **💬 AI フリートーク・ロールプレイ会話**
   - 旅行中の特定のシチュエーション（カフェ、空港、ホテルなど）だけでなく、あらゆる話題に対し、ネイティブレベルのAIと音声・テキストでリアルタイム英会話が可能です。
4. **🗣 発音・アクセント（Minimal Pairs）特訓**
   - RとL、BとV、THの違いなど、日本人が苦手とする「発音記号の壁」を乗り越えるための聞き分け特訓機能（音声再生付き）を搭載しています。
5. **🤙 スラング＆イディオム辞典**
   - ネイティブが日常で使う自然な表現やイディオム、スラングの解説と音声を豊富に収録しています。
6. **🎵 高速テキスト読み上げ (Edge TTS)**
   - 全ての単語やフレーズはEdge TTS連携により、ネイティブの自然な発音とイントネーションで確認できます。

## 🛠 技術スタック

*   **Frontend**: HTML, CSS, JavaScript (Vanilla JS/ES Modules), Vite
*   **Backend**: Python, FastAPI, SQLite
*   **AI**: Ollama (llama 3.1 8B 等ローカル推論対応)
*   **TTS**: Edge TTS

## 🚀 起動方法

### 前提条件
- `Node.js` (フロントエンドの開発サーバー用)
- `Python 3.10+` (バックエンドAPIとDB用)
- `Ollama` がローカルにインストール・起動済み (`llama3.1:8b` 等のモデルが存在すること)

### 環境のセットアップ

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/yprdaily/FluencyFlow.git
   cd FluencyFlow/v2_general
   ```
2. **バックエンドの起動 (ポート 8080)**
   ```bash
   cd backend
   pip install -r requirements.txt
   python server.py
   ```
3. **フロントエンドの起動 (ポート 3000)**
   別ターミナルで実行してください。
   ```bash
   cd frontend
   npm install
   npx vite --port 3000
   ```
4. ブラウザで `http://localhost:3000` にアクセスします。

## 💡 アプリケーション構成

- `v2_general/frontend/`: ユーザーインターフェース (SPAアーキテクチャ)
- `v2_general/backend/`: FastAPI サーバー、SQLite 辞書データ (`dictionary.db`)、Ollama 連携ロジック

---
*Created as part of the English Mastery evolution series.*
