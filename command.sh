#!/bin/bash

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install hub
hub version
clear

cd /mnt/c/Users/chast/OneDrive/Documents/GitHub
cp -ry dope-as-fuck copy
cp -ry dope-as-fuck backup
rm -r dope-as-fuck

mkdir dope-as-fuck
cd dope-as-fuck
git init
git config --global hub.protocol https
git remote add origin https://github.com/ChastantShontz/dope-as-fuck
hub create

touch .gitattributes
echo # Auto detect text files and perform LF normalization >> .gitattributes
echo * text=auto >> .gitattributes

cp -ry ../dope-as-fuck/fonts fonts
cp -ry ../dope-as-fuck/img img
cp -ry ../dope-as-fuck/video video
cp -ry ../dope-as-fuck/audio audio
cp -ry ../dope-as-fuck/.vscode .vscode
cp -y ../dope-as-fuck/index.html index.html
cp -y ../dope-as-fuck/main.css main.css
cp -y ../dope-as-fuck/normalize.css normalize.css
cp -y ../dope-as-fuck/page.js page.js
cp -y ../dope-as-fuck/data.json data.json
cp -y ../dope-as-fuck/captions.vtt captions.vtt
cp -y ../dope-as-fuck/README.md README.md
cp -y ../dope-as-fuck/command.sh command.sh
cp -y ../dope-as-fuck/config.yaml config.yaml
cp -y ../dope-as-fuck/songs.pdf songs.pdf
cp -y ../dope-as-fuck/header.cpp header.cpp
cp -y ../dope-as-fuck/code.m code.m
git add --all
git status

git commit -m "Initial commit"
git push -u origin main
git log

cd ..
rm -r copy
rm -r backup

clear
echo GitHub repository "dope-as-fuck" successfully compiled
echo Initialized 507 objects {
echo     folders: [
echo         ".git",
echo         ".vscode",
echo         "audio",
echo         "fonts",
echo         "img",
echo         "video"
echo     ],
echo     files: [
echo         ".gitattributes",
echo         "README.md",
echo         "captions.vtt",
echo         "code.m",
echo         "command.sh",
echo         "config.yaml",
echo         "data.json",
echo         "header.cpp",
echo         "index.html",
echo         "main.css",
echo         "normalize.css",
echo         "page.js",
echo         "songs.pdf"
echo     ]
echo }
