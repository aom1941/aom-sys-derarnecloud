/**
 * Sorting functions for Git World content media items.
 */

import type {
  ContentMediaItem,
  SortDirection,
  SortField,
  SortOptions,
} from "./content_media.ts";

/**
 * Returns a comparator function for the given sort field and direction.
 */
function getComparator(
  field: SortField,
  direction: SortDirection,
): (a: ContentMediaItem, b: ContentMediaItem) => number {
  const sign = direction === "asc" ? 1 : -1;

  return (a: ContentMediaItem, b: ContentMediaItem): number => {
    switch (field) {
      case "name":
        return sign * a.name.localeCompare(b.name);
      case "size":
        return sign * (a.size - b.size);
      case "type":
        return sign * a.type.localeCompare(b.type);
      case "createdAt":
        return sign * (a.createdAt.getTime() - b.createdAt.getTime());
      case "updatedAt":
        return sign * (a.updatedAt.getTime() - b.updatedAt.getTime());
    }
  };
}

/**
 * Sorts an array of content media items according to the provided options.
 *
 * @param items - The items to sort.
 * @param options - The sort field and direction.
 * @returns A new sorted array; the original array is not mutated.
 */
export function sortContentMedia(
  items: ContentMediaItem[],
  options: SortOptions,
): ContentMediaItem[] {
  return [...items].sort(getComparator(options.field, options.direction));
}
