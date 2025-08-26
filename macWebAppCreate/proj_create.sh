I have some block level elements contained in a flexbox and everything looks visually correct, but a question did come up in my mind. These block level elements are behaving like an inline element like I want them to, but that's because they're in a flexbox. Should I still declare their display to be inline as like a best practice, or do I not need to because of the flexbox? Here's the css: 
/* HEADER INFORMATION /
header {
margin: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
}
/ set block level elements to inline */
h1 {
display: inline;
}
.contactInfo {
display: inline;
}

and this html: 
<header>
 <address class="contactInfo">
<a id="phoneNumber" class="phone" href="tel:+16164387722">
 +1 (616) 438-7722
</a>
</address>
<h1>Alec Mirambeau</h1>
<address class="contactInfo">
<a id="emailAddress" href="mailto:alecmirambeau1@gmail.com">
 alecmirambeau1@gmail.com
</a>
</address>
</header>

You actually don't need to declare display: inline on the flex items, and it's not considered a best practice to do so. Here's why:
How Flexbox Affects Display Values

When elements become flex items (direct children of a flex container), their display values are automatically "blockified" according to CSS specifications. This means:

    display: inline becomes display: block
    display: inline-block becomes display: block
    display: table becomes display: block
    etc.

So your display: inline declarations are essentially being overridden anyway.
The Flexbox Behavior You're Seeing

The reason your elements are behaving "like inline elements" (sitting side by side) isn't because of their display property—it's because:

    Flex direction: The default flex-direction: row arranges items horizontally
    Flex sizing: Items size themselves based on their content by default
    Flex alignment: Your justify-content: space-between distributes them across the container

Recommendation

You can safely remove those display: inline declarations:
css

/* HEADER INFORMATION */
header {
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* These display declarations are unnecessary */
/* h1 {
  display: inline;
}
.contactInfo {
  display: inline;
} */

Your layout will work exactly the same way, and your CSS will be cleaner and more semantically correct. The flexbox properties are handling all the positioning and sizing you need.

@echo off
setlocal
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
set /p target_dir="Enter the directory path (or press Enter for current directory): "

REM If no directory provided, use current directory
if "%target_dir%"=="" (
    set "target_dir=%CD%"
    echo Using current directory: %CD%
) else (
    REM Check if the provided directory exists
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
echo.I have a windows script, can you create a macos version?

Here's a macOS version of your Windows batch script converted to a bash script:
Key Changes from Windows to macOS:

    Shebang line: #!/bin/bash at the top
    Variables: No set command - variables are assigned with variable=value
    User input: read -p "prompt" variable instead of set /p
    Conditionals: if [ condition ]; then instead of if "condition"
    Directory operations:
        pwd instead of %CD%
        -d to test if directory exists
        mkdir -p for recursive directory creation
    File creation: Used cat > file << EOF heredoc syntax for cle


#!/bin/bash

echo "================================"
echo "   Web Project Folder Creator"
echo "================================"
echo

# Prompt user for folder name
read -p "Enter the folder name: " folder_name

# Check if folder name was provided
if [ -z "$folder_name" ]; then
    echo "Error: No folder name provided!"
    read -p "Press Enter to exit..."
    exit 1
fi

# Prompt user for target directory
echo
read -p "Enter the directory path (or press Enter for current directory): " target_dir

# If no directory provided, use current directory
if [ -z "$target_dir" ]; then
    target_dir="$(pwd)"
    echo "Using current directory: $(pwd)"
else
    # Check if the provided directory exists
    if [ ! -d "$target_dir" ]; then
        echo
        echo "Error: Directory \"$target_dir\" does not exist!"
        read -p "Do you want to create it? (Y/N): " create_dir
        if [[ "$create_dir" =~ ^[Yy]$ ]]; then
            if ! mkdir -p "$target_dir" 2>/dev/null; then
                echo "Error: Could not create directory!"
                read -p "Press Enter to exit..."
                exit 1
            fi
            echo "Directory created successfully."
        else
            echo "Operation cancelled."
            read -p "Press Enter to exit..."
            exit 1
        fi
    fi
fi

# Create the full path for the new folder
full_path="$target_dir/$folder_name"

# Create the folder in target directory
echo
echo "Creating folder: $folder_name in $target_dir"
if ! mkdir "$full_path" 2>/dev/null; then
    echo "Error: Could not create folder!"
    read -p "Press Enter to exit..."
    exit 1
fi

# Create index.html file
echo "Creating index.html..."
cat > "$full_path/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$folder_name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
EOF

# Create style.css file
echo "Creating style.css..."
cat > "$full_path/style.css" << EOF
/* CSS for $folder_name */
EOF

echo
echo "================================"
echo "Success! Project created:"
echo "Folder: $full_path"
echo "Files: index.html, style.css"
echo "================================"
echo
