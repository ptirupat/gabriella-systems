#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-8765}"

echo "Starting Gabriella Systems Cricket Vision site"
echo "URL: http://${HOST}:${PORT}/"
echo "Press Ctrl+C to stop."

python3 -m http.server "$PORT" --bind "$HOST"
