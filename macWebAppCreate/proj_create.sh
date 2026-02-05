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

# Prompt user for target directory with option to use saved directory
echo
read -p "Use saved directory from current_learning_directory.txt? (Y/N): " use_saved

if [[ "$use_saved" =~ ^[Yy]$ ]]; then
    # Path to the text file
    saved_dir_file="/Users/alecmirambeau/Desktop/personal_programming_stuff/mozillaLearningStuff/current_learning_directory.txt"
    
    # Check if the file exists
    if [ -f "$saved_dir_file" ]; then
        # Read the first line from the file
        target_dir=$(head -n 1 "$saved_dir_file")
        echo "Using saved directory: $target_dir"
    else
        echo "Error: File \"$saved_dir_file\" does not exist!"
        read -p "Press Enter to exit..."
        exit 1
    fi
else
    # Prompt user for target directory manually
    read -p "Enter the directory path (or press Enter for current directory): " target_dir
    
    # If no directory provided, use current directory
    if [ -z "$target_dir" ]; then
        target_dir="$(pwd)"
        echo "Using current directory: $(pwd)"
    fi
fi

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
    <script src="script.js" defer></script>
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

# Create script.js file
echo "Creating script.js..."
cat > "$full_path/script.js" << EOF
// JavaScript for $folder_name
EOF

echo
echo "================================"
echo "Success! Project created:"
echo "Folder: $full_path"
echo "Files: index.html, style.css, script.js"
echo "================================"
echo