import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton, List, Checkbox, Typography } from "@mui/material";
const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckbox = () => {
    toggleComplete(todo.id);
  };
  const handleDelete = () => {
    removeTodo(todo.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onClick={handleCheckbox}
        color="success"
      />
      <List style={{ textDecoration: todo.completed ? "line-through" : null }}>
        <Typography variant="h4">{todo.task}</Typography>
      </List>
      <IconButton>
        <Delete onClick={handleDelete} />
      </IconButton>
    </div>
  );
};

export default Todo;
