using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;
using System.Text;

namespace CromitePortable
{
    static class Program
    {
        private const string AppName = "Cromite Portable";
        private const string AppFolderName = "app";
        private const string DataFolderName = "data";
        private const string ExecutableName = "chrome.exe";

        [STAThread]
        static void Main(string[] args)
        {
            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            string appPath = Path.Combine(baseDir, AppFolderName, ExecutableName);
            string dataPath = Path.Combine(baseDir, DataFolderName);

            // 0. Smart Detection: Check for nested 'chrome-win' folder
            if (!File.Exists(appPath))
            {
                string nestedPath = Path.Combine(baseDir, AppFolderName, "chrome-win", ExecutableName);
                if (File.Exists(nestedPath))
                {
                    appPath = nestedPath;
                }
            }

            // 1. Ensure Data Directory exists for true portability
            if (!Directory.Exists(dataPath))
            {
                try { Directory.CreateDirectory(dataPath); }
                catch { /* Ignore or handle permission error */ }
            }

            // 2. Validate Cromite Binary existence
            if (!File.Exists(appPath))
            {
                MessageBox.Show(
                    "Cromite binary not found!\n\nExpected path: " + appPath + "\n\nPlease run 'Update-Cromite.ps1' to download the browser.",
                    AppName + " Error",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error
                );
                return;
            }

            // 3. Construct Privacy & Portability Flags (Evolution Engine Hardening)
            StringBuilder flags = new StringBuilder();
            
            // Core Portability
            flags.Append("--user-data-dir=\"" + dataPath + "\" ");
            flags.Append("--no-default-browser-check ");
            flags.Append("--no-first-run ");
            
            // Privacy Hardening
            flags.Append("--disable-logging ");
            flags.Append("--disable-breakpad ");
            flags.Append("--disable-component-update ");
            flags.Append("--disable-background-networking ");
            flags.Append("--metrics-recording-only ");
            flags.Append("--no-pings ");
            flags.Append("--password-store=basic ");
            
            // UI & Performance
            flags.Append("--enable-features=WebUIDarkMode ");
            flags.Append("--force-dark-mode ");
            flags.Append("--disable-features=InterestCohort,Translate,WebRtcHideLocalIpsWithMdns,CalculateNativeWinOcclusion,CertificateTransparencyComponentUpdater ");

            // Append any user-provided arguments
            if (args.Length > 0)
            {
                flags.Append(string.Join(" ", args));
            }

            // 4. Launch Process
            ProcessStartInfo startInfo = new ProcessStartInfo(appPath)
            {
                Arguments = flags.ToString(),
                WorkingDirectory = Path.Combine(baseDir, AppFolderName),
                UseShellExecute = false // Better for process management
            };

            try
            {
                Process.Start(startInfo);
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Failed to launch Cromite:\n" + ex.Message,
                    "Startup Error",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error
                );
            }
        }
    }
}
