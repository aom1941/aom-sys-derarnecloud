import { sortContentMedia } from "./src/sort.ts";
import type { ContentMediaItem, SortOptions } from "./src/content_media.ts";

const items: ContentMediaItem[] = [
  {
    name: "README.md",
    path: "README.md",
    type: "file",
    size: 1024,
    sha: "abc123",
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-03-10T08:30:00Z"),
  },
  {
    name: "src",
    path: "src",
    type: "directory",
    size: 0,
    sha: "def456",
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-04-01T12:00:00Z"),
  },
  {
    name: "main.ts",
    path: "main.ts",
    type: "file",
    size: 512,
    sha: "ghi789",
    createdAt: new Date("2024-02-01T09:00:00Z"),
    updatedAt: new Date("2024-04-04T13:00:00Z"),
  },
  {
    name: ".gitignore",
    path: ".gitignore",
    type: "file",
    size: 256,
    sha: "jkl012",
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-01-15T10:00:00Z"),
  },
];

const sortOptions: SortOptions[] = [
  { field: "name", direction: "asc" },
  { field: "size", direction: "desc" },
  { field: "updatedAt", direction: "desc" },
  { field: "type", direction: "asc" },
];

for (const options of sortOptions) {
  console.log(
    `\nSorted by ${options.field} (${options.direction}):`,
  );
  const sorted = sortContentMedia(items, options);
  for (const item of sorted) {
    console.log(`  [${item.type}] ${item.name} (${item.size} bytes)`);
  }
}
