#!/usr/bin/env bash

export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

# Colors for output
RED='\033[0;31m'

GREEN='\033[0;32m'

YELLOW='\033[1;33m'

BLUE='\033[0;34m'

NC='\033[0m' # No Color

# Function to print colored output
print_status() {
	\echo -e "${BLUE}[STATUS]${NC} $1"
}

print_success() {
	\echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
	\echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
	\echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_status "Starting Update.sh script"

# Find workflow .yml/.yaml files, ignoring common non-source directories
\find . -type d \( -iname node_modules -o -iname vendor -o -iname dist -o -iname target -o -iname \.git -o -iname \.next -o -iname \.venv \) -prune -false -o -type f \( -name "*.yml" -o -name "*.yaml" \) -print0 | while IFS= read -r -d $'\0' file; do
	print_status "Processing file: $file"

	temp_file=$(\mktemp)

	while IFS= read -r line; do
		if [[ "$line" =~ uses:\ [^[:space:]]+ ]]; then
			print_status "Found uses in $file: $line"

			action_part=$(\echo "$line" | \sed -E 's/.*uses:\ ([^[:space:]]+).*/\1/' | \tr -d "'\"")

			print_status "Action part: $action_part"

			if [[ "$action_part" == *@* ]]; then
				action_name=$(\echo "$action_part" | \cut -d '@' -f 1)

				current_version=$(\echo "$action_part" | \cut -d '@' -f 2)

				print_status "Current version: $current_version"
			else
				action_name="$action_part"

				current_version=""

				print_status "No version specified"
			fi

			IFS='/' read -r -a parts <<<"$action_name"

			if [ ${#parts[@]} -lt 2 ]; then
				print_error "Invalid action name: $action_name"

				\echo "$line" >>"$temp_file"

				continue
			fi

			repo_part="${parts[0]}/${parts[1]}"

			path_part=$(
				IFS='/'
				\echo "${parts[@]:2}"
			)

			print_status "Repo: $repo_part, Path: $path_part"

			if [[ "$repo_part" == ./* || "$repo_part" == ./. ]]; then
				print_warning "Skipping local action: $action_part"

				\echo "$line" >>"$temp_file"

				continue
			fi

			latest_tag=$(\gh api "repos/$repo_part/tags" | \jq -r '.[0].name')

			if [ -z "$latest_tag" ]; then
				print_error "Failed to get tag for $repo_part"

				\echo "$line" >>"$temp_file"

				continue
			fi

			print_status "Latest tag: $latest_tag"

			if [ -n "$path_part" ]; then
				new_action_part="${repo_part}/${path_part}@${latest_tag}"
			else
				new_action_part="${repo_part}@${latest_tag}"
			fi

			print_status "New action part: $new_action_part"

			new_line="${line/$action_part/$new_action_part}"

			print_success "Updating $action_part to $new_action_part"

			\echo "$new_line" >>"$temp_file"
		else
			\echo "$line" >>"$temp_file"
		fi
	done <"$file"

	\mv "$temp_file" "$file"

	print_success "Updated $file"
done

print_status "Update complete"
