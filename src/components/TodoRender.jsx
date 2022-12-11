import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleHandler } from "../store/slices/TodoSlice";

const TodoRender = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((task) => (
        <li
          className={task.completed ? "toggleHandler" : ""}
          onClick={() => dispatch(toggleHandler(task.id))}
          key={task.id}
        >
          {task.title}{" "}
          <button onClick={(e) => dispatch(deleteTodo(task.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoRender;
