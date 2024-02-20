import { useSignal, useComputed, effect } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

import { Button } from "../components/Button.tsx";
import Display from "../islands/Display.tsx";
import Display2 from "../islands/Display2.tsx";


export default function Home(context: PageProps<Data | null>) {
    const { data } = context;
    //if (!data) {AAAAAAAAAAAAAAAAAP
    //    return (
    //        <>
    //        <div>Something went wrong!</div>
    //        </>
    //    );
    //}
  //  console.log(inspect(200))
    //const { placeholder } = data;
        // <h1 class="text-4xl font-bold">{inspect(200)}</h1>
    const count = useSignal(200)
   // const text = useComputed(() => inspect(count.value).join());

 const wasmCode = Deno.readFileSync("./islands/main.wasm");

    return (
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">

        <Display price={count} text={"a"} wasm={wasmCode}/>
        <Counter count={count}  />
        <Button onClick={() => console.log("a")}> aaaaaaac</Button>
        <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
        />

        <p class="my-4">{count}
        Try updating this message in the
        <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        </div>
        </div>
    );
}
