import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todos",
  initialState: [{ id: nanoid, text: "hello", completed: false }], // Make sure this is an array
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleComplete, editTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
