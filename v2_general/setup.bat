@echo off
chcp 65001 >nul
echo ============================================
echo   FluencyFlow - 初回セットアップ
echo ============================================
echo.

echo [1/3] Python パッケージをインストール中...
pip install -r backend\requirements.txt
if %errorlevel% neq 0 (
    echo [ERROR] Pythonパッケージのインストールに失敗しました。
    echo Pythonがインストールされているか確認してください。
    pause
    exit /b 1
)
echo [OK] Python パッケージ インストール完了
echo.

echo [2/3] Node.js パッケージをインストール中...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Node.jsパッケージのインストールに失敗しました。
    echo Node.jsがインストールされているか確認してください。
    pause
    exit /b 1
)
cd ..
echo [OK] Node.js パッケージ インストール完了
echo.

echo [3/3] Ollama チェック（オプション）...
where ollama >nul 2>&1
if %errorlevel%==0 (
    echo [OK] Ollama が検出されました。
    echo     AIフリートーク機能が利用可能です。
    echo     モデルをダウンロードするには: ollama pull llama3.2
) else (
    echo [INFO] Ollama が見つかりません。
    echo     AIフリートーク機能を使うには Ollama をインストールしてください。
    echo     https://ollama.com からダウンロードできます。
    echo     インストール後: ollama pull llama3.2
)
echo.

echo ============================================
echo   セットアップ完了！
echo   start.bat をダブルクリックしてアプリを起動してください。
echo ============================================
pause
