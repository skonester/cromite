# Cromite Portable Master Script
# Handles Updates, Features, and Portable Environment Management

$ErrorActionPreference = "Stop"

# Branding
$AppName = "Cromite Portable"
$AppID = "cromite-portable"
$UpstreamRepo = "uazo/cromite"
$UpdateUrl = "https://api.github.com/repos/$UpstreamRepo/releases/latest"

# Paths
$BaseDir = $PSScriptRoot
$AppDir = Join-Path $BaseDir "app"
$DataDir = Join-Path $BaseDir "data"
$IniFile = Join-Path $BaseDir "chrlauncher.ini"

function Show-Welcome {
    Clear-Host
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host "        $AppName - Evolution Engine" -ForegroundColor White -BackgroundColor DarkBlue
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host " [1] Check for Updates"
    Write-Host " [2] Apply 'Ton of Features' (Privacy Flags)"
    Write-Host " [3] Setup Portable Environment (Cleanup)"
    Write-Host " [4] Rebuild Native Launcher (.exe)"
    Write-Host " [5] Set as Default Browser"
    Write-Host " [6] Exit"
    Write-Host "==========================================" -ForegroundColor Cyan
}

function Get-LatestVersion {
    Write-Host "Checking for latest version of Cromite..." -ForegroundColor Yellow
    try {
        $Release = Invoke-RestMethod -Uri $UpdateUrl
        $Version = $Release.tag_name
        $DownloadUrl = ($Release.assets | Where-Object { $_.name -like "chrome-win.zip" }).browser_download_url
        return @{ version = $Version; url = $DownloadUrl }
    } catch {
        Write-Error "Failed to fetch update info: $_"
    }
}

function Update-App {
    $Update = Get-LatestVersion
    Write-Host "Latest Version Found: $($Update.version)" -ForegroundColor Green
    
    $Choice = Read-Host "Do you want to download and install? (y/n)"
    if ($Choice -eq 'y') {
        $ZipPath = Join-Path $BaseDir "cromite-update.zip"
        Write-Host "Downloading $($Update.url)..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $Update.url -OutFile $ZipPath
        
        Write-Host "Extracting to $AppDir..." -ForegroundColor Cyan
        if (Test-Path $AppDir) { Remove-Item $AppDir -Recurse -Force }
        Expand-Archive -Path $ZipPath -DestinationPath $AppDir -Force
        
        Remove-Item $ZipPath
        Write-Host "Update Complete!" -ForegroundColor Green
    }
}

function Apply-Features {
    Write-Host "Injecting Privacy & Performance Features into $IniFile..." -ForegroundColor Yellow
    
    $Flags = @(
        '--user-data-dir=".\data"',
        '--no-default-browser-check',
        '--no-first-run',
        '--disable-logging',
        '--disable-breakpad',
        '--disable-component-update',
        '--disable-background-networking',
        '--disable-features=InterestCohort,Translate,WebRtcHideLocalIpsWithMdns,CalculateNativeWinOcclusion,CertificateTransparencyComponentUpdater',
        '--metrics-recording-only',
        '--no-pings',
        '--password-store=basic',
        '--enable-features=WebUIDarkMode',
        '--force-dark-mode'
    )
    
    $FlagsString = $Flags -join " "
    
    # Update chrlauncher.ini logic
    if (Test-Path $IniFile) {
        $Content = Get-Content $IniFile
        $NewContent = $Content | ForEach-Object {
            if ($_ -match "^ChromiumCommandLine=") {
                "ChromiumCommandLine=$FlagsString"
            } else {
                $_
            }
        }
        $NewContent | Set-Content $IniFile
        Write-Host "Features applied successfully!" -ForegroundColor Green
    } else {
        Write-Error "chrlauncher.ini not found!"
    }
}

function Build-Launcher {
    Write-Host "Compiling Native Cromite Launcher with Icon..." -ForegroundColor Yellow
    
    $CscPath = "C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
    if (-not (Test-Path $CscPath)) {
        Write-Error ".NET Framework Compiler (csc.exe) not found."
        return
    }

    # 1. Extract Icon from Cromite
    $AppExe = Join-Path $AppDir "chrome.exe"
    $IconPath = Join-Path $BaseDir "app.ico"
    if (Test-Path $AppExe) {
        Write-Host "Extracting icon from $AppExe..." -ForegroundColor Cyan
        Add-Type -AssemblyName System.Drawing
        $icon = [System.Drawing.Icon]::ExtractAssociatedIcon($AppExe)
        $stream = New-Object System.IO.FileStream($IconPath, [System.IO.FileMode]::Create)
        $icon.Save($stream)
        $stream.Close()
    }

    # 2. Build with Icon
    $Source = Join-Path $BaseDir "LauncherSource.cs"
    $Output = Join-Path $BaseDir "Cromite Portable.exe"
    $IconFlag = if (Test-Path $IconPath) { "/win32icon:""$IconPath""" } else { "" }
    
    try {
        $Args = @("/target:winexe", "/out:""$Output""", "/reference:System.Windows.Forms.dll,System.dll,System.Drawing.dll")
        if ($IconFlag) { $Args += $IconFlag }
        $Args += """$Source"""
        
        & $CscPath $Args
        Write-Host "Build Successful: $Output" -ForegroundColor Green
    } catch {
        Write-Error "Failed to compile launcher: $_"
    }
}

function Setup-Environment {
    Write-Host "Configuring Portable Data Directory..." -ForegroundColor Yellow
    if (-not (Test-Path $DataDir)) {
        New-Item -ItemType Directory -Path $DataDir | Out-Null
        Write-Host "Created $DataDir" -ForegroundColor Green
    }
    
    # Remove ungoogled references & logs
    $LegacyFiles = @(
        "ungoogled-chromium-portable.sample.yml",
        "log\ungoogled-chromium-portable.log",
        "portapp.yml",
        "Cromite Portable.yml"
    )
    foreach ($File in $LegacyFiles) {
        $Path = Join-Path $BaseDir $File
        if (Test-Path $Path) {
            Remove-Item $Path -Force
            Write-Host "Cleaned up legacy/obsolete reference: $File" -ForegroundColor Cyan
        }
    }
}

# Main Loop
while ($true) {
    Show-Welcome
    $Input = Read-Host "Select an option"
    switch ($Input) {
        "1" { Update-App }
        "2" { Apply-Features }
        "3" { Setup-Environment }
        "4" { Build-Launcher }
        "5" { & "$BaseDir\SetDefaultBrowser.bat" }
        "6" { Exit }
    }
    Write-Host "Press any key to return to menu..."
    [void][System.Console]::ReadKey($true)
}
