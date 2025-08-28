@echo off
setlocal enabledelayedexpansion
echo ================================
echo   Web Project Folder Creator
echo ================================
echo.

REM Prompt user for folder name
set /p folder_name="Enter the folder name: "

REM Check if folder name was provided
if "%folder_name%"=="" (
    echo Error: No folder name provided!
    pause
    exit /b 1
)

REM Prompt user for target directory
echo.
echo Enter the directory path, or:
echo   - Press Enter for current directory
echo   - Type 'y' to use saved learning directory
set /p target_dir="Your choice: "

REM Check if user wants to use saved directory
if /i "%target_dir%"=="y" (
    set "saved_dir_file=C:\Users\mirambeaua\learningStuff\mozillaLearningStuff\current_learning_directory.txt"
    
    REM Check if the saved directory file exists
    if exist "!saved_dir_file!" (
        REM Read the first line from the file
        set /p target_dir=<"!saved_dir_file!"
        echo Using saved directory: !target_dir!
    ) else (
        echo Error: Saved directory file not found at:
        echo !saved_dir_file!
        pause
        exit /b 1
    )
) else if "%target_dir%"=="" (
    REM If no directory provided, use current directory
    set "target_dir=%CD%"
    echo Using current directory: %CD%
) else (
    REM User entered a custom path - check if it exists
    if not exist "%target_dir%" (
        echo.
        echo Error: Directory "%target_dir%" does not exist!
        set /p create_dir="Do you want to create it? (Y/N): "
        if /i "!create_dir!"=="Y" (
            mkdir "%target_dir%" 2>nul
            if errorlevel 1 (
                echo Error: Could not create directory!
                pause
                exit /b 1
            )
            echo Directory created successfully.
        ) else (
            echo Operation cancelled.
            pause
            exit /b 1
        )
    )
)

REM Create the full path for the new folder
set "full_path=%target_dir%\%folder_name%"

REM Create the folder in target directory
echo.
echo Creating folder: %folder_name% in %target_dir%
mkdir "%full_path%" 2>nul

if not exist "%full_path%" (
    echo Error: Could not create folder!
    pause
    exit /b 1
)

REM Create index.html file
echo Creating index.html...
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>%folder_name%^</title^>
echo     ^<link rel="stylesheet" href="style.css"^>
echo ^</head^>
echo ^<body^>
@REM echo     ^<h1^>^</h1^>
@REM echo     ^<p^>^</p^>
echo.
echo ^</body^>
echo ^</html^>
) > "%full_path%\index.html"

REM Create style.css file
echo Creating style.css...
(
echo /* CSS for %folder_name% */
@REM echo.
@REM echo body {
@REM echo     font-family: Arial, sans-serif;
@REM echo     margin: 0;
@REM echo     padding: 20px;
@REM echo     background-color: #f4f4f4;
@REM echo }
@REM echo.
@REM echo h1 {
@REM echo     color: #333;
@REM echo     text-align: center;
@REM echo }
@REM echo.
@REM echo p {
@REM echo     color: #666;
@REM echo     text-align: center;
@REM echo     font-size: 18px;
@REM echo }
) > "%full_path%\style.css"

echo.
echo ================================
echo Success! Project created:
echo Folder: %full_path%
echo Files: index.html, style.css
echo ================================
echo.