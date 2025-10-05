#!/bin/bash

set -e

ICONS_DIR="/Users/praveen/Personal/devcard/public/images/tech-icons"

echo "🔧 Starting icons sanitize process..."

# Check if the directory exists
if [ ! -d "$ICONS_DIR" ]; then
    echo "❌ Error: Directory $ICONS_DIR does not exist"
    exit 1
fi

# Create a backup directory
BACKUP_DIR="$ICONS_DIR-backup-$(date +%Y%m%d-%H%M%S)"
echo "📦 Creating backup at $BACKUP_DIR"
cp -r "$ICONS_DIR" "$BACKUP_DIR"

# Function to convert filename to lowercase and remove spaces, dashes, and periods completely (but keep .png extension)
to_lowercase_no_spaces() {
    local filename="$1"
    local name_without_ext="${filename%.*}"
    local extension="${filename##*.}"
    echo "$(echo "$name_without_ext" | tr '[:upper:]' '[:lower:]' | sed 's/[ -.()]//g').$extension"
}

# Rename files to lowercase and remove spaces, dashes, and periods completely
echo "🔄 Sanitizing icons..."
cd "$ICONS_DIR"

renamed_count=0
for file in *.png; do
    if [ -f "$file" ]; then
        new_name=$(to_lowercase_no_spaces "$file")
        if [ "$file" != "$new_name" ]; then
            echo "Renaming: $file -> $new_name"
            mv "$file" "$new_name"
            ((renamed_count++))
        fi
    fi
done

echo ""
echo "🎉 Tech icons rename process completed!"
echo "📊 Summary:"
echo "   - Renamed $renamed_count files to lowercase"
echo "   - Backup created at: $BACKUP_DIR"
echo ""