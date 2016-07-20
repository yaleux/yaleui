#!/bin/bash
# Git add, commit, and push with a message
# Publish to GitHub Pages

args=("$@")

#add, commit, push & publish
git add .
git commit -m "$@"
git push origin master
git subtree push --prefix dist origin gh-pages