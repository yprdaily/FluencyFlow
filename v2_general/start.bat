@echo off
chcp 65001 >nul
title FluencyFlow
echo.
echo   ╔══════════════════════════════════════╗
echo   ║                                      ║
echo   ║   🚀  FluencyFlow  🚀               ║
echo   ║   総合英語学習アプリ                 ║
echo   ║                                      ║
echo   ╚══════════════════════════════════════╝
echo.

cd /d "%~dp0"

REM === Ollama チェック ===
where ollama >nul 2>&1
if %errorlevel%==0 (
    echo [OK] Ollama 検出 - AI会話機能が利用可能
    start /B "" ollama serve >nul 2>&1
    timeout /t 2 /nobreak >nul
) else (
    echo [INFO] Ollama 未検出 - シナリオモードで動作
)

REM === Python バックエンド起動 ===
echo [....] バックエンドサーバー起動中...
start /B "" python backend\server.py >nul 2>&1

REM 起動待機
timeout /t 3 /nobreak >nul
echo [OK] バックエンドサーバー起動完了 (port 8080)

REM === フロントエンド起動 ===
echo [....] フロントエンド起動中...
cd frontend
start "" npx vite --open
echo [OK] ブラウザが開きます...
echo.
echo ============================================
echo   アプリが起動しました！
echo   http://localhost:3000
echo.
echo   終了するにはこのウィンドウを閉じてください。
echo ============================================
echo.

REM プロセスが終了しないように待機
cmd /k
