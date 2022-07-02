import React from "react";

const Todo = ({ todo }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </li>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
