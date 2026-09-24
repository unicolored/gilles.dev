#! /bin/bash

session=$(jq .name package.json)
session=${session//./_}
tmux kill-session -t $session
