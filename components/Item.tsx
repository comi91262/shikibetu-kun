import IconWeed from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/plant.tsx"
import IconScroll from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/align-box-left-stretch.tsx"
import IconRing from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-plus-2.tsx"
import IconCane from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/cane.tsx"
import IconPot from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/archive.tsx"

interface ItemProps {
  item: string;
  price: number;
}

export function Item({ item, price }: ItemProps) {
  return (
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pt-3 pb-0 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {item}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {price}ギタン
          </div>
        </div>
      </li>
    </ul>
  );
}
//          <div class="flex-shrink-0">
//            <img class="w-8 h-8 rounded-full" src="/unknow.jpg" alt="Neil image" />
//          </div>

