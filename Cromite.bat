@echo off
setlocal
set "BASE_DIR=%~dp0"
set "APP_DIR=%BASE_DIR%app"
set "DATA_DIR=%BASE_DIR%data"

if not exist "%DATA_DIR%" mkdir "%DATA_DIR%"

if exist "%APP_DIR%\chrome.exe" (
    start "" "%APP_DIR%\chrome.exe" --user-data-dir="%DATA_DIR%" --no-default-browser-check --no-first-run --disable-logging --disable-breakpad --disable-component-update --disable-background-networking --disable-features=InterestCohort,Translate,WebRtcHideLocalIpsWithMdns --metrics-recording-only --no-pings --password-store=basic --enable-features=WebUIDarkMode --force-dark-mode %*
) else (
    echo [ERROR] Cromite binary not found in %APP_DIR%
    echo Please run Update-Cromite.ps1 first to download the browser.
    pause
)
endlocal
