/**
 * @module Files
 *
 */
export type Type = Set<{
    Path: string;
    Name: string;
    File: () => Promise<Set<string>>;
}>;
export type { Type as default };
