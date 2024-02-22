import Button from "./Button.tsx"
import type { Signal } from "@preact/signals";
interface NumberKeyboardProps {
  n: Signal<number>;
}

export default function NumberKeyboard({ n }: NumberKeyboardProps) {
  return (
    <div>
      <p class="flex gap-2 py-2">
        <Button onClick={() => n.value = n.value * 10 + 1}>1</Button>
        <Button onClick={() => n.value = n.value * 10 + 2}>2</Button>
        <Button onClick={() => n.value = n.value * 10 + 3}>3</Button>
      </p>
      <p class="flex gap-2 py-2">
        <Button onClick={() => n.value = n.value * 10 + 4}>4</Button>
        <Button onClick={() => n.value = n.value * 10 + 5}>5</Button>
        <Button onClick={() => n.value = n.value * 10 + 6}>6</Button>
      </p>
      <p class="flex gap-2 py-2">
        <Button onClick={() => n.value = n.value * 10 + 7}>7</Button>
        <Button onClick={() => n.value = n.value * 10 + 8}>8</Button>
        <Button onClick={() => n.value = n.value * 10 + 9}>9</Button>
      </p>
      <p class="flex gap-2 py-2">
        <Button onClick={() => n.value = n.value * 10 + 0}>0</Button>
        <Button onClick={() => n.value = 0}>Clear</Button>
      </p>
    </div>
  );
}