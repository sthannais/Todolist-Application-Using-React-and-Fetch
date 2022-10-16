import { useEffect, useState } from "react";
import { todoList } from "./helper/TodoList";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getList();
  }, [todos]);

  const getList = async () => {
    const result = await todoList();
    setTodos(result);
    return result;
  };
  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, done: !todo.done }
          : { ...todo };
      })
    );
  };

  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), label: newTodo, done: false };

    setTodos([...todos, newItem]);
  };

  return (
    <>
      <h1>todos</h1>
      {todos.length > 0 ? (
        <div className="container">
          <TodoForm addTodo={addTodo} todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} onComplete={onComplete} />
          {todos.length <= 0 ? "Add label" : todos.length - 1 + " item left"}
        </div>
      ) : null}
    </>
  );
}

export default App;
