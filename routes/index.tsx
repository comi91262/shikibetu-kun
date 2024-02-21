import { PageProps } from "$fresh/server.ts";
import Display from "../islands/Display.tsx";


export default function Home(context: PageProps) {
  const wasmCode = Deno.readFileSync("./main.wasm");

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="gap-4 max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Display wasm={wasmCode} />
      </div>
    </div>
  );
}
