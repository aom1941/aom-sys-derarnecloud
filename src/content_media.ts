/**
 * Type definitions for Git World content media items.
 */

/** The type of a content media item. */
export type ContentMediaType = "file" | "directory" | "symlink" | "submodule";

/** A single content media item from a Git repository. */
export interface ContentMediaItem {
  name: string;
  path: string;
  type: ContentMediaType;
  size: number;
  sha: string;
  createdAt: Date;
  updatedAt: Date;
}

/** The field by which to sort content media items. */
export type SortField = "name" | "size" | "type" | "createdAt" | "updatedAt";

/** The direction in which to sort content media items. */
export type SortDirection = "asc" | "desc";

/** Options for sorting a list of content media items. */
export interface SortOptions {
  field: SortField;
  direction: SortDirection;
}
