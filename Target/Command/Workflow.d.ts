export default _default;
/**
 * @module Workflow
 *
 */
/**
 * Trigger all workflow tasks, or - when `--Review` / `--Absorb` is passed -
 * review or absorb action versions in the repository the command is run from.
 *
 * @param Options - commander options
 *
 */
declare function _default(Options?: {
    Absorb?: boolean;
    Review?: boolean;
}): Promise<void>;
