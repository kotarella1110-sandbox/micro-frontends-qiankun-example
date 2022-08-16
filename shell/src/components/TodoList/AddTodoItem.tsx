import { ChangeEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atom";

export const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem} disabled={!inputValue}>
        Add
      </button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
