import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForms = ({ addtodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const clickHandler = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addtodo({ ...todo, id: uuidv4() });

      //reset task
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        label="Task"
        variant="standard"
        type="text"
        name="task"
        value={todo.task}
        onChange={clickHandler}
      />

      <Button variant="contained" color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TodoForms;
