import IconWeed from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/plant.tsx"
import IconScroll from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/align-box-left-stretch.tsx"
import IconRing from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-plus-2.tsx"
import IconCane from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/cane.tsx"
import IconPot from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/archive.tsx"

interface TabsProps {
  item: string;
  price: number;
}

export default function Tabs({ item, price }: TabsProps) {
  return (
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
          <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <IconRing />腕輪
          </a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
            <IconWeed/>草・種
          </a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <IconScroll />巻物
          </a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <IconCane />杖
          </a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <IconPot />壺
          </a>
        </li>
      </ul>
    </div>
  );
}
