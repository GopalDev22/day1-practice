import { useEffect, useState } from "react";
import "./App.css";
import TodoForms from "./components/TodoForms";
import TodoList from "./components/TodoList";

const KEY = "todo-persist";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem(KEY));
    if (storageTodo) {
      setTodos(storageTodo);
    }
  }, []);
  console.log(todos);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const addtodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForms addtodo={addtodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
