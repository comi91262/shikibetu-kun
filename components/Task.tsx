interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pt-3 pb-0 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="/unknow.jpg" alt="Neil image" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {task}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            367ギタン
          </div>
        </div>
      </li>
    </ul>
  );
}