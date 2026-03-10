# 🌺 Hawaii English App

ハワイ旅行に特化した短期集中型の英語・英会話学習アプリです。
旅行前の1ヶ月で「使える英語」を身につけるための実践的なシチュエーションと、AIを活用したリアルな会話シミュレーションを提供します。

> [!NOTE]
> このリポジトリには、より汎用的な無制限の英語学習に特化した **[FluencyFlow V2](./v2_general)** も内包されています。長期の汎用学習をご希望の場合は `v2_general` ディレクトリをご参照ください。

## 📸 デモ・スクリーンショット
> *ここにアプリのトップページや会話画面のスクリーンショットを追加してください*
<!-- ![Home Screen](path/to/home.png) -->
<!-- ![Conversation Screen](path/to/conversation.png) -->
<!-- ![AI Talk](path/to/ai-talk.png) -->

## 🛠 技術スタック
- **Frontend**: Vite + Vanilla JavaScript (ES Modules), HTML5, CSS3
- **Backend**: FastAPI (Python)
- **AI Integration**: Ollama (`llama3.2` などを利用したローカルLLM)
- **Audio Processing**:
  - Web Speech API (ブラウザネイティブの音声認識 STT)
  - Edge TTS (ネイティブレベルの高品質な音声合成)

## 🌟 主な機能
- **📚 実践英単語・フレーズ帳**: 空港、ホテル、レストランなどハワイ旅行のリアルな場面を網羅
- **🤙 スラング・イディオム辞典**: 「Shaka」「Mahalo」などハワイ特有のローカル表現やネイティブの口語表現
- **💬 会話シミュレーション**: 実際のシナリオに基づく会話ロールプレイ（音声認識を用いた発音チェック付き）
- **🤖 AIフリートーク**: OllamaのLLMを活用した、店舗スタッフ等とのアバター型リアルタイム会話演習
- **🗣 発音練習とリスニング**: Minimal Pairs を用いた耳の特訓と、正確な音声フィードバック

## ✨ 技術的ハイライト
- **AIのシームレスな統合**: クラウドAPIに依存せず、Ollamaを用いたローカルでの完結した高度な英会話の実現
- **リアルタイム音声処理**: Edge TTSとブラウザSTTを組み合わせた自然な音声のやり取り
- **ゲーミフィケーション**: EXP（経験値）システム、連続学習記録（Streak）、正答時の紙吹雪演出など、学習継続のための工夫

## 🚀 セットアップと起動方法
詳細な手順、トラブルシューティング、各OSごとの注意事項については [SETUP.md](docs/SETUP.md) をご参照ください。

### 簡単な起動手順
1. 環境変数の設定
   `frontend/` に `.env.example` をコピーして `.env` を作成します。
   （デフォルト設定のままでも起動可能です）
2. コマンドプロンプト等でバッチファイルを実行
```bash
# 初回セットアップ
setup.bat

# 2回目以降の起動
start.bat
```

## 📂 ドキュメント
- [アーキテクチャ詳細 (ARCHITECTURE.md)](docs/ARCHITECTURE.md)
- [セットアップガイド (SETUP.md)](docs/SETUP.md)

## 🗺 今後の拡張計画 (Roadmap)
- TypeScriptへの完全移行による型安全性の向上
- Jestを用いた自動テスト（単体・結合テスト）の追加
- Docker化による環境構築のさらなる簡易化
- GitHub Pages または Vercel などを用いたフロントエンド・デモサイトのホスティング

## 📄 ライセンス
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
