#!/usr/bin/env bash

Action=(
    "actions-rs/toolchain"
    "actions-rs/cargo"
    "actions/checkout"
    "actions/setup-node"
    "dependabot/fetch-metadata"
    "github/codeql-action"
    "pnpm/action-setup"
    "pozil/auto-assign-issue"
    "cloudflare/wrangler-action"
    "actions/upload-artifact"
    "actions/cache"
)

for Action in "${Action[@]}"; do
    Tag=$(gh api repos/"$Action"/tags | jq -r .[0].name)

    if [ -n "$Tag" ]; then
        echo "$Action"
        echo "$Tag"
    fi
done
