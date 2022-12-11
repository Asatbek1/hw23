import React from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import TodoRender from "./components/TodoRender";

const App = () => {
  return (
    <div className="App">
      <ToDoForm />
      <TodoRender/>
    </div>
  );
};

export default App;
