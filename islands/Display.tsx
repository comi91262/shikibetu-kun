import { JSX } from "preact";
import type { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import RadioButton from "../components/RadioButton.tsx";
import { Tasks } from "../components/Tasks.tsx";
import NumberKeyboard from "../components/NumberKeyBoard.tsx"
import "./wasm_exec.js";

interface DisplayProps {
  wasm: Uint8Array
  price: Signal<number>;
}

interface State {
  buy: any;
  sell: any;
  buyText: string[];
  sellText: string[];
  isWasmReady: boolean;
}

export default function Display(props: DisplayProps) {

  const [state, setState] = useState<State>({
    buy: null,
    sell: null,
    buyText: [], //"ぬれた巻物,高飛び草[祝],くねくね草[祝],いやし草,かぐわし草,胃拡張の種,胃縮小の種",
    sellText: [], //"ドラゴン草",
    isWasmReady: false,
  });

  useEffect(() => {
    if (!state.isWasmReady) {
      return
    }

    setState({ ...state, buyText: state.buy(props.price.value), sellText: state.sell(props.price.value) });
  }, [props.price.value]);


  useEffect(async () => {
    const go = new Go();
    const r = await WebAssembly.instantiate(props.wasm, go.importObject)

    go.run(r.instance)
    setState({ ...state, buy: buy, sell: sell, isWasmReady: true });
  }, []);

    const [selected, setSelected] = useState("buy");
    const changeValue = (event: JSX.ChangeEvent<HTMLInputElement>) => setSelected(event.target.value);

  const switchText = (selected: string): string[] => {
    switch (selected) {
      case "buy":
        return state.buyText;
      case "sell":
        return state.sellText;
    }
    return []
  }

  return (
    <>
      <RadioButton value={selected} onChange={changeValue}  />
      <div class="text-3xl tabular-nums">{props.price.value}ギタン</div>
      <NumberKeyboard n={props.price} />
      <Tasks tasks={switchText(selected)} />
    </>
  );
}

