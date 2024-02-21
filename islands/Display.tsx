import { JSX } from "preact";
import type { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import TextArea from "../components/Textarea.tsx";
import RadioButton from "../components/RadioButton.tsx";
import { Tasks } from "../components/Tasks.tsx";
import Switch from "../components/Switch.tsx";
import Button from "../components/Button.tsx";
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
      <p class="flex gap-8 py-6">
        <Button onClick={() => props.price.value = props.price.value * 10 + 1}>1</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 2}>2</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 3}>3</Button>
      </p>
      <p class="flex gap-8 py-6">
        <Button onClick={() => props.price.value = props.price.value * 10 + 4}>4</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 5}>5</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 6}>6</Button>
      </p>
      <p class="flex gap-8 py-6">
        <Button onClick={() => props.price.value = props.price.value * 10 + 7}>7</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 8}>8</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 9}>9</Button>
        <Button onClick={() => props.price.value = props.price.value * 10 + 0}>0</Button>
      </p>
      <p class="flex gap-8 py-6">
        <Button onClick={() => props.price.value = 0}>Clear</Button>
      </p>
      <div class="text-3xl tabular-nums">{props.price.value}ギタン</div>
      <Tasks tasks={switchText(selected)} />
      <RadioButton value={selected} onChange={changeValue}  />
      <div class="flex gap-8 py-6">{state.buyText}</div>
      <div class="flex gap-8 py-6">{state.sellText}</div>
    </>
  );
}


// onChange={(e) => setText((e.target as HTMLInputElement).value)}

//import { useRef, useState } from "preact/hooks";
//import { Tasks } from "../components/Tasks.tsx";
//
//export interface ITask {
//  uuid: string;
//  desc: string;
//}
//
//export default function Todo() {
//  const [tasks, setTasks] = useState<ITask[]>([]);
//  const taskRef = useRef<HTMLInputElement | null>(null);
//
//  function removeTask(uuid: string) {
//    setTasks((tasks) => tasks.filter((task) => task.uuid != uuid));
//  }
//
//  return (
//    <div class="flex flex-col w-full pt-5">
//      <form
//        class="flex gap-2 w-full"
//        onSubmit={(e) => {
//          e.preventDefault();
//          if (!taskRef?.current?.value) return;
//          setTasks((
//            p,
//          ) => [...p, {
//            desc: taskRef?.current?.value ?? "",
//            uuid: crypto.randomUUID(),
//          }]);
//          taskRef.current.value = "";
//        }}
//      >
//        <input
//          class="w-5/6 border-1 border-gray-500 h-10 rounded p-2"
//          placeholder="Write your task here..."
//          type="text"
//          ref={taskRef}
//        />
//        <button
//          type="submit"
//          // value="Add"
//          class="w-1/6 bg-gray-200 text-gray-50 rounded cursor-pointer hover:bg-gray-300 flex justify-center items-center"
//        >
//          <svg
//            xmlns="http://www.w3.org/2000/svg"
//            viewBox="0 0 512 512"
//            class="w-6"
//          >
//            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
//          </svg>
//        </button>
//      </form>
//    </div>
//  );
//}