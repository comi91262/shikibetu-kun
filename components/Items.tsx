// import { ITask } from "../islands/Todo.tsx";
// import { Task } from "./Task.tsx";
//
// interface TasksProps {
//   tasks: ITask[];
//   removeTask: (s: string) => void;
// }
//
// export function Tasks({ tasks, removeTask }: TasksProps) {
//   return (
//     <div class="flex flex-col gap-2 pt-2 w-full">
//       {tasks?.map((task) => <Task task={task} removeTask={removeTask} />)}
//     </div>
//   );
// }

// import { ITask } from "../islands/Todo.tsx";
import { Item } from "./Item.tsx";

interface TasksProps {
  items: string[];
  price: number;
}

export function Items({ items, price }: TasksProps) {
  return (
    <div class="flex flex-col gap-2 pt-2 w-full">
      {items?.map((item) => <Item item={item} price={price} />)}
    </div>
  );
}