import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";


export default function Switch(props: { checked: boolean }) {
    return (
        <div class="flex items-center mb-4">
            <input checked={!props.checked} id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">による</label>
            <input checked={props.checked} id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">売値による</label>
        </div>
    );
}