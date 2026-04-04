import { assertEquals } from "jsr:@std/assert";
import { sortContentMedia } from "./sort.ts";
import type { ContentMediaItem } from "./content_media.ts";

const now = new Date("2024-04-04T00:00:00Z");
const earlier = new Date("2024-01-01T00:00:00Z");

const items: ContentMediaItem[] = [
  {
    name: "zebra.png",
    path: "zebra.png",
    type: "file",
    size: 2048,
    sha: "aaa",
    createdAt: earlier,
    updatedAt: now,
  },
  {
    name: "apple.jpg",
    path: "apple.jpg",
    type: "file",
    size: 512,
    sha: "bbb",
    createdAt: now,
    updatedAt: earlier,
  },
  {
    name: "media",
    path: "media",
    type: "directory",
    size: 0,
    sha: "ccc",
    createdAt: earlier,
    updatedAt: earlier,
  },
];

Deno.test("sortContentMedia - by name ascending", () => {
  const result = sortContentMedia(items, { field: "name", direction: "asc" });
  assertEquals(result[0].name, "apple.jpg");
  assertEquals(result[1].name, "media");
  assertEquals(result[2].name, "zebra.png");
});

Deno.test("sortContentMedia - by name descending", () => {
  const result = sortContentMedia(items, { field: "name", direction: "desc" });
  assertEquals(result[0].name, "zebra.png");
  assertEquals(result[1].name, "media");
  assertEquals(result[2].name, "apple.jpg");
});

Deno.test("sortContentMedia - by size ascending", () => {
  const result = sortContentMedia(items, { field: "size", direction: "asc" });
  assertEquals(result[0].size, 0);
  assertEquals(result[1].size, 512);
  assertEquals(result[2].size, 2048);
});

Deno.test("sortContentMedia - by size descending", () => {
  const result = sortContentMedia(items, { field: "size", direction: "desc" });
  assertEquals(result[0].size, 2048);
  assertEquals(result[1].size, 512);
  assertEquals(result[2].size, 0);
});

Deno.test("sortContentMedia - by type ascending", () => {
  const result = sortContentMedia(items, { field: "type", direction: "asc" });
  assertEquals(result[0].type, "directory");
  assertEquals(result[1].type, "file");
  assertEquals(result[2].type, "file");
});

Deno.test("sortContentMedia - by updatedAt descending", () => {
  const result = sortContentMedia(items, {
    field: "updatedAt",
    direction: "desc",
  });
  assertEquals(result[0].name, "zebra.png");
});

Deno.test("sortContentMedia - by createdAt ascending", () => {
  const result = sortContentMedia(items, {
    field: "createdAt",
    direction: "asc",
  });
  assertEquals(result[0].createdAt, earlier);
  assertEquals(result[result.length - 1].createdAt, now);
});

Deno.test("sortContentMedia - does not mutate original array", () => {
  const original = [...items];
  sortContentMedia(items, { field: "name", direction: "asc" });
  assertEquals(items.map((i) => i.name), original.map((i) => i.name));
});

Deno.test("sortContentMedia - handles empty array", () => {
  const result = sortContentMedia([], { field: "name", direction: "asc" });
  assertEquals(result, []);
});
