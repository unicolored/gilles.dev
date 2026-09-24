#! /bin/bash

set -e

pnpm prebuild

#pnpm run generate-portfolio-data

pnpm build
