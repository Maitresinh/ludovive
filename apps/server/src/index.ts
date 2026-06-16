import path from "node:path";
import { fileURLToPath } from "node:url";
import { app } from "./app.js";

const isEntrypoint = process.argv[1] ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url) : false;
if (isEntrypoint) {
  await app.listen({ port: Number(process.env.PORT ?? 3333), host: "0.0.0.0" });
}
