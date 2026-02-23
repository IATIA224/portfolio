# PowerShell helper to download the APK into the public folder
# Usage: run this from the repository root in PowerShell

$apkUrl = "https://github.com/IATIA224/Calculator/releases/latest/download/app-debug.apk"
$dest = Join-Path -Path $PSScriptRoot -ChildPath "..\public\app-debug.apk"

Write-Host "Downloading APK from $apkUrl to $dest..."
Invoke-WebRequest -Uri $apkUrl -OutFile $dest
Write-Host "Download complete. The APK is saved in the public directory."
