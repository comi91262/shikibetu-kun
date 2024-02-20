import { useSignal } from "@preact/signals";
import Display from "../islands/Display.tsx";


export default function Home(context: PageProps<Data | null>) {
  const price = useSignal(0)
  const wasmCode = Deno.readFileSync("./main.wasm");

  return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <img
      class="my-6"
      src="/logo.svg"
      width="128"
      height="128"
      alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      Memo: TODO
      <Display price={price} wasm={wasmCode}/>
      </div>
      </div>
  );
}
