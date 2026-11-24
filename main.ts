import { mkdirSync, writeFileSync } from "node:fs";

const line = "Sign-in has been down for all users since 09:14 UTC. We don't know the cause yet, and we're investigating now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
