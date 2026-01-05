#!/usr/bin/env bash

Current=$(\cd -- "$(\dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && \pwd)

# shellcheck disable=SC1091
source "$Current/Fetch.sh"

Build "$Current/Configuration/**/*.{ts,json}" \
    --ESBuild "$Current/Configuration/ESBuild/Maintain.ts"

Build "$Current/**/*.ts" \
    --ESBuild "$Current/Configuration/ESBuild/Target.ts"
