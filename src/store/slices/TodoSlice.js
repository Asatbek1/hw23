import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleHandler(state, action) {
      state.todos.map((item) =>
        item.id === action.payload ? (item.completed = !item.completed) : item
      );
    },
  },
});
export const { toggleHandler, deleteTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
