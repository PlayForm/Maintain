#!/usr/bin/env bash

ScriptDir=$(\cd -- "$(\dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && \pwd)
Root="$(dirname "$ScriptDir")"

ExtractVersion() {
	local Action="$1"
	grep -rh "uses:[[:space:]]*${Action}@" \
		"$Root/Workflow/" \
		"$Root/.github/workflows/" \
		2>/dev/null |
		head -1 |
		sed -E "s|.*uses:[[:space:]]*${Action}@([^[:space:]]+).*|\1|" |
		tr -d "'\""
}

# Extract the human-readable tag from the # comment next to a pinned SHA.
# E.g., from "uses: actions/setup-node@abc123 # v6.4.0" extracts "v6.4.0"
ExtractTag() {
	local Action="$1"
	grep -rh "uses:[[:space:]]*${Action}@" \
		"$Root/Workflow/" \
		"$Root/.github/workflows/" \
		2>/dev/null |
		head -1 |
		sed -nE 's/.*# ([^[:space:]]+).*/\1/p' |
		tr -d "'\""
}

VERSION_CLOUDFLARE_WRANGLER_ACTION=$(ExtractVersion "cloudflare/wrangler-action")
VERSION_CLOUDFLARE_WRANGLER_ACTION_TAG=$(ExtractTag "cloudflare/wrangler-action")
VERSION_ACTIONS_SETUP_NODE=$(ExtractVersion "actions/setup-node")
VERSION_ACTIONS_SETUP_NODE_TAG=$(ExtractTag "actions/setup-node")
VERSION_ACTIONS_UPLOAD_ARTIFACT=$(ExtractVersion "actions/upload-artifact")
VERSION_ACTIONS_UPLOAD_ARTIFACT_TAG=$(ExtractTag "actions/upload-artifact")
VERSION_ACTIONS_CACHE=$(ExtractVersion "actions/cache")
VERSION_ACTIONS_CACHE_TAG=$(ExtractTag "actions/cache")
VERSION_ACTIONS_RS_CARGO=$(ExtractVersion "actions-rs/cargo")
VERSION_ACTIONS_RS_CARGO_TAG=$(ExtractTag "actions-rs/cargo")

for Var in VERSION_CLOUDFLARE_WRANGLER_ACTION VERSION_ACTIONS_SETUP_NODE \
	VERSION_ACTIONS_UPLOAD_ARTIFACT VERSION_ACTIONS_CACHE VERSION_ACTIONS_RS_CARGO; do
	if [ -z "${!Var}" ]; then
		echo "Error: Failed to extract ${Var} from local yml files"
		exit 1
	fi
done

export VERSION_CLOUDFLARE_WRANGLER_ACTION
export VERSION_CLOUDFLARE_WRANGLER_ACTION_TAG
export VERSION_ACTIONS_SETUP_NODE
export VERSION_ACTIONS_SETUP_NODE_TAG
export VERSION_ACTIONS_UPLOAD_ARTIFACT
export VERSION_ACTIONS_UPLOAD_ARTIFACT_TAG
export VERSION_ACTIONS_CACHE
export VERSION_ACTIONS_CACHE_TAG
export VERSION_ACTIONS_RS_CARGO
export VERSION_ACTIONS_RS_CARGO_TAG
