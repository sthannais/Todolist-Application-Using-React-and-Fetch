import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteItem }) {
  return (
    !todos[0].done &&
    todos.length > 1 && (
      <div>
        {todos.map(
          (todo, index) =>
            todo.done && (
              <TodoItem
                key={`todo-${index}`}
                todo={todo}
                onDeleteItem={onDeleteItem}
              />
            )
        )}
      </div>
    )
  );
}
export default TodoList;
