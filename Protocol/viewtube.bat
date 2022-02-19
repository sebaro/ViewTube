@echo off
setlocal

set "i=%~1"
set "i=%i:viewtube:=%"
set "i=%i:SEPARATOR=|%"
set "i=%i:||=| |%"
for /f "tokens=1,2,3 delims=|" %%a in ("%i%") do (
	set "v=%%a"
	set "a=%%b"
	set "s=%%c"
)
if "%a%"==" " set "a="
if "%a%"=="" (
	if "%s%"=="" (
		"C:\Program Files\VideoLAN\VLC\vlc.exe" "%v%"
	) else (
		"C:\Program Files\VideoLAN\VLC\vlc.exe" --sub-file="%s%" "%v%"
	)
) else (
	if "%s%"=="" (
		"C:\Program Files\VideoLAN\VLC\vlc.exe" --input-slave="%a%" "%v%"
	) else (
		"C:\Program Files\VideoLAN\VLC\vlc.exe" --sub-file="%s%" --input-slave="%a%" "%v%"
	)
)
