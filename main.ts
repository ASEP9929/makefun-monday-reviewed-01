import { mkdirSync, writeFileSync } from "node:fs";

// Monday, Reviewed in One Line — final
const entry =
  "Monday, one star: my inbox hit 214 unread before my coffee cooled, and the 9 a.m. standup moved itself to 8:30 just to watch me panic.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
