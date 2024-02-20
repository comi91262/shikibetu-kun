import type { Signal } from "@preact/signals";
import { useComputed } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import "./wasm_exec.js";
// import Inspect from "./util.tsx";

interface DisplayProps {
  wasm: Uint8Array
  price: Signal<number>;
  text: Signal<string>;
    // func: (n: number) => string;
}

interface State {
  func: any;
  isWasmReady: boolean;
}
  

export default function Display(props: DisplayProps) {

  const [state, setState] = useState<State>({
    func: null,
    text: "",
    isWasmReady: false,
  }); 

  const square = useComputed(() => {
  })

  useEffect(() => {
    if (!state.isWasmReady) {
      return 0
    }

    setState({ ...state, text: state.func(props.price.value).join() });
  }, [props.price.value]);


  useEffect(async () => {
    // console.log(wasmCode)
// const wasmCode = Deno.readFileSync("./islands/main.wasm");
    const go = new Go();
    const r = await WebAssembly.instantiate(props.wasm, go.importObject)

    go.run(r.instance)
    console.log(inspect(200))
    setState({ ...state, func: inspect, isWasmReady: true });
  }, []);


  return (
    <div class="flex gap-8 py-6">
      <p class="text-3xl tabular-nums">{state.text}</p>
        <Button onClick={() => props.price.value = props.price.value * 10 + 1}>1</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 2}>2</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 3}>3</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 4}>4</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 5}>5</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 6}>6</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 7}>7</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 8}>8</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 9}>9</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 0}>0</Button>
        <Button onClick={() => props.price.value = 0}>Clear</Button>
    </div>
  );
}

