/**
 * @module Review
 *
 */
/**
 * Read-only, repository-agnostic review of the GitHub Actions references in
 * the repository the command is run from. Writes nothing - no Update.sh, no
 * template directory creation, no file changes. Reports:
 *
 * - every `uses:` action discovered under `.github/` with its current
 *   reference, the latest tag/SHA published on GitHub, and whether the pin is
 *   current, stale, or floating (unpinned tag);
 * - what the canonical `Workflow/` templates would apply in the `--Absorb`
 *   phase 2 (never downgrading);
 * - actions the templates do not cover (their `Update.sh` pin stands).
 *
 */
declare const _default: () => Promise<void>;
export default _default;
