import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete, editTodo } from "../Features/TodoSlice";

function DisplayTodos() {
  const todos = useSelector((state) => state.todos); // Correctly access todos
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setNewText(todo.text);
  };

  const handleSaveClick = (todoId) => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todoId, newText: newText.trim() }));
      setEditingTodoId(null); // Exit edit mode
    }
  };

  const handleCancelClick = () => {
    setEditingTodoId(null); // Exit edit mode
    setNewText(""); // Clear new text input
  };

  return (
    <>
      <div className="mt-8 text-xl font-bold">Todos</div>
      <ul className="list-none mt-4">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded  ${
              todo.completed ? "bg-gray-400" : ""
            }`}
            key={todo.id}
          >
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
                className="mr-3"
              />
              {editingTodoId === todo.id ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="text-white bg-gray-800 border border-gray-700 rounded py-1 px-3 mr-2"
                  />
                  <button
                    onClick={() => handleSaveClick(todo.id)}
                    className="text-green-500 hover:text-green-600"
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="text-red-500 hover:text-red-600 ml-2"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ) : (
                <span
                  className={`text-white ${
                    todo.completed ? "line-through text-gray-200" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div className="flex items-center">
              {editingTodoId !== todo.id && (
                <button
                  onClick={() => handleEditClick(todo)}
                  className="text-yellow-500 hover:text-yellow-600 ml-2"
                >
                  <i className="fas fa-edit"></i>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-2"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DisplayTodos;
