import { useRecoilValue } from "recoil";
import { todoListState } from "./atom";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h1>TodoList</h1>
      <AddTodoItem />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
