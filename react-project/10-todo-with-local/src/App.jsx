import { useEffect, useState } from "react";

import { TodoProvider } from "./Context/TodoContext";

import "./App.css";

import TodoItem from "./Component/TodoItem";

import TodoForm from "./Component/TodoForm";

function App() {
  // Main app component

  const [todos, setTodos] = useState([]);
  // Initialize the todos state as an empty array

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    // Add a new todo with a unique id and merge it with the previous state
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    // Update an existing todo by matching its id and replacing it with the new todo
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // Remove a todo by filtering out the todo with the specified id
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // Toggle the completion status of a todo by matching its id and flipping the completed property
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    // Load todos from local storage on initial render

   
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
      // If there are stored todos, update the state with them
    }
  }, []);
  // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
   

    localStorage.setItem("todos", JSON.stringify(todos));
    // Save the todos state to local storage whenever it changes
  }, [todos]);
  // Dependency array with todos means this effect runs whenever todos changes

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
            {/* Todo form for adding new todos */}
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
                {/* Render each todo item */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
