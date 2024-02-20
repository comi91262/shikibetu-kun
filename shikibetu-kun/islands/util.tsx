import "./wasm_exec.js";
// import { Sync } from "$std/fs/mod.ts";

console.log(Deno.env.get("ENV_DATA"));
const decoder = new TextDecoder("utf-8");
// const path = new URL("./main.wasm", import.meta.url);
const go = new Go();
const { instance } = await WebAssembly.instantiate(
     Deno.readFileSync("./islands/main.wasm"),// fetch(path),
     go.importObject,
 );
 go.run(instance);


export default function Inspect(n :number): string {
    return window.inspect(n).join()
}

