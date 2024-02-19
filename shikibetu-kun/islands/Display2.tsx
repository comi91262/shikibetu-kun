import type { Signal } from "@preact/signals";

interface DisplayProps {
  t: Signal<string>;
}

export default function Display2(props: DisplayProps) {
    console.log(props.t)
  return (
        <textarea name="postContent" value={props.t} rows={4} cols={40} />
  );
}

