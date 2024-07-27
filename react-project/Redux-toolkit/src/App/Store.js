import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Features/TodoSlice";

// Function to load todos from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) return { todos: [] };
    return { todos: JSON.parse(serializedState) };
  } catch (err) {
    return { todos: [] };
  }
};

// Function to save todos to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.todos);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const preloadedState = loadState();

export const Store = configureStore({
  reducer: {
    todos: todosReducer // Use 'todos' as the key for the reducer
  },
  preloadedState
});

// Subscribe to store updates and save state to local storage
Store.subscribe(() => {
  saveState(Store.getState());
});
