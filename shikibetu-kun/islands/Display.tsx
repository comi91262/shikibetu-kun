import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface DisplayProps {
  price: Signal<number>;
}

export default function Display(props: DisplayProps) {
  return (
    <div class="flex gap-8 py-6">
      <p class="text-3xl tabular-nums">{props.price}</p>
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

