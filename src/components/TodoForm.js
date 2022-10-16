import React, { useState } from "react";
import { updateList } from "../helper/TodoList";
import { deleteList, createList } from "../helper/TodoList";

function TodoForm({ addTodo, todos, setTodos }) {
  const [userInput, setUserInput] = useState("");
  const [disabledButton, setDisableButton] = useState(false);

  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const onDelete = async () => {
    await deleteList();
    await createList();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!userInput.trim() === false) return;
    const valiArray = todos.find((element) => {
      return element.label === userInput.trim();
    });
    console.log({ valiArray });
    if (valiArray !== undefined) {
      setDisableButton(false);
      return 0;
    }
    setDisableButton(true);

    if (userInput.trim() !== "") {
      addTodo(userInput);
      const payload = {
        label: userInput,
        id: new Date().getDate(),
        done: true,
      };
      const result = [...todos, payload];
      //setTodos(todos);
      updateList(result);
      setUserInput("");
      setDisableButton(false);
    }
  };
  return (
    <div className="input" style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleOnChange} />
        <button disabled={disabledButton}>Enter</button>
        <button onClick={onDelete}>Delete</button>
      </form>
    </div>
  );
}

export default TodoForm;
