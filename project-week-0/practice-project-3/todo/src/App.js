import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/dist/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });

    todoNameRef.current.value = null;
  }

  function handleClearTodos(params) {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  function keyPressHandler(e) {
    if (e.which === 13) handleAddTodo();
    ///if (e.key === "Enter") handleAddTodo(); EZ UGYAN AZT CSINNNÁLJA
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" onKeyDown={keyPressHandler} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear completed</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
