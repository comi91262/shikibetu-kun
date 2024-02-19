import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import "./../wasm_exec.js";

import { Button } from "../components/Button.tsx";


const path = new URL("../main.wasm", import.meta.url);
const go = new Go();
console.log(go);
const { instance } = await WebAssembly.instantiateStreaming(
  fetch(path),
  go.importObject,
);

go.run(instance);

// go.run(instance);

export const handler: Handlers<Data | null> = {
    async GET(_request, context) {
        try {
            return context.render(null);
        } catch (error: unknown) {
            console.error(`Error doing stuff with image file: ${error as string}`);
            return context.render(null);
        }
    },
};

export default function Home(context: PageProps<Data | null>) {
    const { data } = context;
    //if (!data) {
    //    return (
    //        <>
    //        <div>Something went wrong!</div>
    //        </>
    //    );
    //}
    //const { placeholder } = data;
    console.log(data)
    console.log(inspect(200))
    console.log(inspect(200)[1])

    const count = useSignal(3);
    return (
        <div class="px-4 py-8 mx-auto bg-[#86efac]">

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
        <Button>Clear</Button>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
        Try updating this message in the
        <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        </div>
        </div>
    );
}
