#!/bin/bash
TASK="$1"
BRANCH="subagent-$(date +%s)"
# Add worktree inside a hidden folder to keep it clean, or just use the parent dir
git worktree add ../$BRANCH -b $BRANCH
cd ../$BRANCH
mkdir -p .pi
pi -p "$TASK" > .pi/subagent.log 2>&1 &
echo $! > .pi/subagent.pid
echo "Subagent deployed on branch: $BRANCH"
echo "PID: $(cat .pi/subagent.pid)"
