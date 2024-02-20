import { useSignal } from "@preact/signals";
import Display from "../islands/Display.tsx";


export default function Home(context: PageProps<Data | null>) {
  const price = useSignal(200)
  const wasmCode = Deno.readFileSync("./main.wasm");

  return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <h1>シレン6 値段識別</h1>
      <img
      class="my-6"
      src="/logo.svg"
      width="128"
      height="128"
      alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      上が買値による候補、下が売値による候補です
      <Display price={price} wasm={wasmCode}/>
      </div>
      </div>
  );
}
