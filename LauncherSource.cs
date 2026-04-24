using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace CromitePortable
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            string launcherPath = Path.Combine(baseDir, "chrlauncher.exe");
            
            if (!File.Exists(launcherPath))
            {
                MessageBox.Show("chrlauncher.exe not found! Please ensure it is in the same folder as this executable.", "Cromite Portable Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Launch chrlauncher which handles updates and then starts Cromite with flags from chrlauncher.ini
            ProcessStartInfo startInfo = new ProcessStartInfo(launcherPath)
            {
                WorkingDirectory = baseDir,
                UseShellExecute = true
            };

            try
            {
                Process.Start(startInfo);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Failed to launch: " + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
