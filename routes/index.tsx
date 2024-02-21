import { useSignal } from "@preact/signals";
import Display from "../islands/Display.tsx";
import Header from "../components/Header.tsx";


export default function Home(context: PageProps<Data | null>) {
  const price = useSignal(200)
  const wasmCode = Deno.readFileSync("./main.wasm");

  return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <Header title={"シレン6 値段識別"} active={"Docs"}/>
      <Display price={price} wasm={wasmCode}/>
      </div>
      </div>
  );
}
