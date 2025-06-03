// Board.jsx
import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  function renderSquare(i) {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;
  }

  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-300 p-2 rounded shadow-md w-max mx-auto">
      {squares.map((_, i) => renderSquare(i))}
    </div>
  );
}

export default Board;
