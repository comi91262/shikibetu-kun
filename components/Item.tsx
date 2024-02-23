import IconWeed from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/plant.tsx"
import IconScroll from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/align-box-left-stretch.tsx"
import IconRing from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-plus-2.tsx"
import IconCane from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/cane.tsx"
import IconPot from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/archive.tsx"

interface ItemProps {
  item: string;
  price: number;
}

function getIcon(name: string)  {
  if(name.includes("の杖")){
    return <IconCane />
  }
  if(name.includes("の壺")){
    return <IconPot />
  }
  if(name.includes("割れない壺")){
    return <IconPot />
  }
  if(name.includes("ぬれた巻物")){
    return <IconScroll />
  }
  if(name.includes("の巻物")){
    return <IconScroll />
  }
  if(name.includes("草")){
    return <IconWeed />
  }
  if(name.includes("種")){
    return <IconWeed />
  }
  if(name.includes("の腕輪")){
    return <IconRing />
  }
  return undefined
}

export function Item({ item, price }: ItemProps) {
  return (
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pt-3 pb-0 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          {getIcon(item)}
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {item}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {price}ギタン
          </div>
        </div>
      </li>
    </ul>
  );
}

