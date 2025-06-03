// Square.jsx
import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 transition"
    >
      {value}
    </button>
  );
}

export default Square;
