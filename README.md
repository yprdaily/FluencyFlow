# 🌺 Hawaii English App

ハワイ旅行・実用シチュエーションに特化した短期集中型の英会話学習アプリです。 Edge TTSによる自然な発音と、OllamaによるAIフリートーク機能を搭載しており、旅行前の実践的な英会話トレーニングに最適です。

---
> [!NOTE]
> このリポジトリには、より汎用的な無制限の英語学習に特化した **[FluencyFlow V2](./v2_general)** も内包されています。汎用学習をご希望の場合は `v2_general` ディレクトリをご参照ください。

## 🌟 主な機能
1. **🌴 ハワイ旅行向け実践レッスン** (空港、ホテル、ショッピング、レストランなど、リアルな場面を想定)
2. **🏆 リスニング・並べ替えクイズ** 各レッスンの習熟度を測るためのインタラクティブなテスト
3. **🤖 Ollama 連携フリートーク** (ネイティブの店員やホストとのロールプレイなど、AIと自由会話)
4. **🤙 スラング・イディオム辞書** ハワイ・ローカルの最新スラングや、ネイティブ定番のイディオム集
5. **🔊 音声合成連携** Edge TTSによるネイティブな英語音声の超リアルな読み上げ機能

## 🛠 技術スタック
- **Frontend**: HTML, CSS, JavaScript (Vanilla JS), Vite
- **Backend**: Python, FastAPI
- **AI**: Ollama (LLMローカル推論)
- **TTS**: Edge TTS

## 🚀 起動方法

### 前提条件
- `Python 3.10+`
- `Node.js`
- `Ollama` がローカルにインストール・起動済みであること（`llama3.2` などのモデルがpullされていること）

### セットアップ（1-Click）
Windows環境の場合は、ルートディレクトリにあるバッチファイルで自動セットアップ・起動が可能です。
```bash
# 初回セットアップ
setup.bat

# 2回目以降の起動
start.bat
```

### 手動起動
#### バックエンド (Port: 8765)
```bash
cd backend
pip install -r requirements.txt
python server.py
```

#### フロントエンド (Port: 4567)
別ターミナルで実行してください。
```bash
cd frontend
npm install
npx vite --port 4567
```

ブラウザで `http://localhost:4567` にアクセスして学習を開始してください。
