#!/bin/bash

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
	readarray -t Tag < <(gh api repos/"$Action"/tags | jq -r .[0].name)

	for Tag in "${Tag[@]}"; do
		echo "$Action"
		echo "$Tag"
	done
done
