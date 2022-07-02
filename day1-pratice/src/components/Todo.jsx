import React, { useState } from "react";
import "./Todo.styles.css";

const Todo = () => {
  const [todoitem, setTodoitem] = useState("");
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodoitem("");
    setList([...list, todoitem]);
  };
  return (
    <div className="todos">
      <h1>Todo App</h1>
      <div className="input-todo">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="enter your todo..."
            value={todoitem}
            onChange={(e) => setTodoitem(e.target.value)}
          />
          <button className="btn" onClick={submitHandler} type="submit">
            Enter
          </button>
        </form>
      </div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
