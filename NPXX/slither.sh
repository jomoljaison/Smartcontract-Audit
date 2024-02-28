#!/bin/bash
# My first shell script

echo "entered into folder "
FILE_NAME="$PWD"
echo  "folder is" $FILE_NAME

# find ./upload -type f -printf "%t - %p\n" | sort -n | tail -1

latest_file=$(find $FILE_NAME $@ -type f -printf '%T+ %p\n' | sort -r | head -n 1 | cut -d' ' -f2)
echo "Latest file is " "${latest_file}"

# echo "entered into folder"
# cd contracts

echo "Slither performing "
slither ${latest_file}

echo "Bye for now"