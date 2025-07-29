#! /bin/bash

set -e

#yarn eslint
yarn lint

yarn check # use yarn format if needed

echo "✅ Tests completed"
