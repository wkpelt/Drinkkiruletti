#!/bin/sh
nohup json-server --watch db.json --port 3004 --host 194.76.224.25 &;
nohup nodemon drinkkiruletti &
