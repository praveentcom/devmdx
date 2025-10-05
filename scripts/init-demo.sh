#!/bin/bash

# Download and extract data from zip file
echo "📥 Downloading data from zip file..."
echo
curl -L -o data.zip "https://storage.googleapis.com/praveentcom-public/projects/devcard/data/data-v1.0.5-demo.zip"
echo

if [ $? -eq 0 ]; then  
  # Extract the zip file to data directory
  echo "📦 Extracting data..."
  unzip -q data.zip -d data
  
  if [ $? -eq 0 ]; then
    # Remove __MACOSX folder if it exists (macOS metadata)
    if [ -d "data/__MACOSX" ]; then
      rm -rf data/__MACOSX
    fi
    
    # Clean up the zip file
    rm data.zip
  else
    echo "❌ Failed to extract data"
    exit 1
  fi
else
  echo "❌ Failed to download data"
  exit 1
fi
