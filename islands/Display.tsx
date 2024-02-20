import type { Signal } from "@preact/signals";
import { useComputed } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import "./wasm_exec.js";

interface DisplayProps {
  wasm: Uint8Array
  price: Signal<number>;
}

interface State {
  func: any;
  text: string;
  isWasmReady: boolean;
}
  

export default function Display(props: DisplayProps) {

  const [state, setState] = useState<State>({
    func: null,
    text: "",
    isWasmReady: false,
  }); 

  useEffect(() => {
    if (!state.isWasmReady) {
      return 
    }

    setState({ ...state, text: state.func(props.price.value).join() });
  }, [props.price.value]);


  useEffect(async () => {
    const go = new Go();
    const r = await WebAssembly.instantiate(props.wasm, go.importObject)

    go.run(r.instance)
    setState({ ...state, func: inspect, isWasmReady: true });
  }, []);


  return (
    <>
      <div class="flex gap-8 py-6">
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
      <div class="text-3xl tabular-nums">{props.price.value}</div>
      <div class="flex gap-8 py-6">{state.text}</div>
    </>
  );
}

