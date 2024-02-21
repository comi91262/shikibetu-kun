import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
/** ラジオボタン設定 */
interface Radio {
    label: string
    value: string
}

export default function RadioButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    const radioButtons: Radio[] = [
        {
            label: "値",
            value: "buy"
        },
        {
            label: "売値",
            value: "sell"
        }
    ]

    return (
        <div className="container form-check">
            <div className="row">
            {radioButtons.map(radio => {
                return (
                    <div className="col-4">
                        {/* checked属性に式を定義する */}
                        <input className="form-check-input" type="radio" name="sweets"
                            value={radio.value} checked={radio.value === props.value} onChange={props.onChange}/>
                        <label className="form-check-label">
                            <span className="fs-6">{radio.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
            <div>{props.value}が選択されました！</div>
        </div>
    )
}