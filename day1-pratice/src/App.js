import { useState } from "react";
import "./App.css";
import TodoForms from "./components/TodoForms";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForms addtodo={addtodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
