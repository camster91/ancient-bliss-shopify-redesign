#!/bin/bash
BRANCH="$1"
# Merge subagent branch into master
git merge $BRANCH
git worktree remove ../$BRANCH
git branch -d $BRANCH
echo "Subagent branch $BRANCH merged successfully."
