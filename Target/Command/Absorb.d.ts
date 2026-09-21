/**
 * @module Absorb
 *
 */
/**
 * Versions-only GitHub Actions updater for the repository the command is run
 * from. Two-phase pipeline (mirrors `Update.sh` → `Maintain Workflow`):
 *
 * Phase 1 - no absorb-marked `Update.sh` in the repository root: writes a
 * scoped `Update.sh` that pins every `uses:` reference inside `.github/` to
 * the latest tag and commit SHA, leaving every other byte of every file
 * intact. Run it, then re-run `Maintain Workflow --Absorb`.
 *
 * Phase 2 - absorb-marked `Update.sh` present: iterates over the Maintain
 * library's `Workflow/` templates (the canonical source of truth) and applies
 * the pinned template versions to the repository's workflow files. Only the
 * `uses:` version segment is replaced, and it is never downgraded; everything
 * else in the repository is left untouched.
 *
 */
declare const _default: () => Promise<void>;
export default _default;
