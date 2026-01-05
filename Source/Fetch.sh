#!/usr/bin/env bash

# Fetch Cloudflare Wrangler Action version
VERSION_CLOUDFLARE_WRANGLER_ACTION=$(gh api "repos/cloudflare/wrangler-action/tags" | jq -r '.[0].name' 2>/dev/null)

if [ -z "$VERSION_CLOUDFLARE_WRANGLER_ACTION" ]; then
    echo "Error: Failed to fetch cloudflare/wrangler-action version"
    exit 1
fi

# Fetch Actions Setup Node version
VERSION_ACTIONS_SETUP_NODE=$(gh api "repos/actions/setup-node/tags" | jq -r '.[0].name' 2>/dev/null)

if [ -z "$VERSION_ACTIONS_SETUP_NODE" ]; then
    echo "Error: Failed to fetch actions/setup-node version"
    exit 1
fi

# Fetch Actions Upload Artifact version
VERSION_ACTIONS_UPLOAD_ARTIFACT=$(gh api "repos/actions/upload-artifact/tags" | jq -r '.[0].name' 2>/dev/null)

if [ -z "$VERSION_ACTIONS_UPLOAD_ARTIFACT" ]; then
    echo "Error: Failed to fetch actions/upload-artifact version"
    exit 1
fi

# Fetch Actions Cache version
VERSION_ACTIONS_CACHE=$(gh api "repos/actions/cache/tags" | jq -r '.[0].name' 2>/dev/null)

if [ -z "$VERSION_ACTIONS_CACHE" ]; then
    echo "Error: Failed to fetch actions/cache version"
    exit 1
fi

# Fetch Actions RS Cargo version
VERSION_ACTIONS_RS_CARGO=$(gh api "repos/actions-rs/cargo/tags" | jq -r '.[0].name' 2>/dev/null)

if [ -z "$VERSION_ACTIONS_RS_CARGO" ]; then
    echo "Error: Failed to fetch actions-rs/cargo version"
    exit 1
fi

# Export all versions
export VERSION_CLOUDFLARE_WRANGLER_ACTION
export VERSION_ACTIONS_SETUP_NODE
export VERSION_ACTIONS_UPLOAD_ARTIFACT
export VERSION_ACTIONS_CACHE
export VERSION_ACTIONS_RS_CARGO
