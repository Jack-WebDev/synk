#!/usr/bin/env bash
set -euo pipefail

# Go to packages/db
cd "$(dirname "$0")/.."

# Load env (so we get DATABASE_URL)
# Adjust path if your .env lives somewhere else
set -o allexport
# shellcheck source=/dev/null
source ../../apps/server/.env
set +o allexport

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not set"
  exit 1
fi

echo "Using DATABASE_URL: $DATABASE_URL"
echo

for file in src/migrations/*.sql; do
  echo "Applying migration: $file"
  psql "$DATABASE_URL" -f "$file"
  echo
done

echo "✅ All migrations applied successfully"
