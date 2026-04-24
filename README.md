# Cromite Portable (Evolution Engine)

<div align="center">
  <img src="./logo.png" width="128" alt="Cromite Logo" />
  <br>
  
  [![Latest Release](https://img.shields.io/github/v/release/uazo/cromite?label=Cromite%20Version&color=008080&logo=chromium)](https://github.com/uazo/cromite/releases)
  [![Downloads](https://img.shields.io/github/downloads/uazo/cromite/total?label=Downloads&color=008080&logo=github)](https://github.com/uazo/cromite/releases)
  [![License](https://img.shields.io/github/license/uazo/cromite?color=008080)](https://github.com/uazo/cromite/blob/master/LICENSE)
  [![Platform](https://img.shields.io/badge/Platform-Windows-blue?logo=windows)](https://github.com/skonester/cromite)
  
  <br>
  <a href="https://github.com/uazo/cromite/releases/latest">
    <img src="https://img.shields.io/badge/DOWNLOAD-CROMITE-orange?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Download Cromite" />
  </a>
</div>

Cromite is a [Chromium](https://www.chromium.org/Home) fork based on [Bromite](https://github.com/bromite/bromite) with built-in support for ad blocking and an eye for privacy. This repository provides a **truly portable** Windows environment for Cromite, ensuring all data and configurations stay within the local folder.


---

## 📂 Project Structure & File Guide

Below is a breakdown of the core files and their purpose in this environment:

### 🚀 Launchers & Executables
| File | Description |
| :--- | :--- |
| `Cromite Portable.exe` | The primary entry point. A lightweight wrapper that initializes the environment and launches `chrlauncher.exe`. |
| `Cromite.bat` | A fallback batch script that launches Cromite directly from the `\app` folder with a full suite of privacy and portability flags. |
| `chrlauncher.exe` | A specialized launcher that handles the heavy lifting: downloading the latest Cromite binaries and managing the process. |

### 🛠️ Management & Setup
| File | Description |
| :--- | :--- |
| `Update-Cromite.ps1` | **The Master Control Script.** Run this to check for updates, inject privacy features into the configuration, or set up the portable data structure. |
| `SetDefaultBrowser.bat` | Automates the process of registering this portable Cromite instance as your system's default browser. |
| `LauncherSource.cs` | The C# source code for `Cromite Portable.exe`, provided for transparency and custom builds. |

### ⚙️ Configuration & Metadata
| File | Description |
| :--- | :--- |
| `chrlauncher.ini` | The main configuration for the launcher. Contains the "Ton of Features" command-line flags and update URLs. |
| `portapp.json` | Metadata about the portable application, including versioning and publisher info. |
| `cromite-portable.sample.yml` | A sample configuration file used for environment definitions. |
| `portable.dat` | A marker file used by some components to enforce portable behavior. |
| `cromite.code-workspace` | VS Code workspace configuration for developers contributing to the project. |

---

## 🌟 Key Features of this Environment

- **Zero System Footprint**: All user profiles, cache, and settings are stored in a local `\data` directory.
- **Privacy Hardened**: Pre-configured with over 20+ privacy-focused flags (e.g., disabled telemetry, pings, and background networking).
- **Auto-Updating**: Integrated with `chrlauncher` and the master PowerShell script to keep your browser current with the latest `uazo/cromite` releases.
- **Dark Mode by Default**: Forced dark mode and WebUI dark mode enabled out of the box.

## 🛠️ Getting Started

1. **Initialize**: Run `Update-Cromite.ps1` and select `[1] Check for Updates` to download the latest browser binaries into the `\app` folder.
2. **Configure**: Select `[2] Apply Features` in the script to ensure all privacy flags are active.
3. **Launch**: Use `Cromite Portable.exe` to start browsing.

---
*Note: This project is a curated portable distribution and is not officially affiliated with the core Cromite/uazo team.*


