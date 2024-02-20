#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";
//#import "./wasm_exec.js";
//#
//#const path = new URL("./static/main.wasm", import.meta.url);
//#const go = new Go();
//#const { instance } = await WebAssembly.instantiateStreaming(
//#     fetch(path),
//#     go.importObject,
//# );
//# go.run(instance);
//
// console.log(window.inspect(200))

await dev(import.meta.url, "./main.ts", config);
