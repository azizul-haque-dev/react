import { useState } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./App/Store";
import AddTodo from "./Components/AddTodo";
import DisplayTodos from "./Components/DisplayTodo";

function App() {
  return (
    <Provider store={Store}>
      <AddTodo />
      <DisplayTodos />
    </Provider>
  );
}

export default App;
