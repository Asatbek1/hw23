import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/TodoSlice";

const ToDoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const onsubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newItem = {
        title: inputValue,
        id: Date.now(),
        completed: false,
      };
      dispatch(addTodo(newItem));
    }
    setInputValue("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
