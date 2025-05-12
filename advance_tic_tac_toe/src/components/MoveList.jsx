// MoveList.jsx
import React from "react";

function MoveList({ history, jumpTo }) {
  return (
    <ol className="mt-4 space-y-1">
      {history.map((_, move) => {
        const desc = move === 0 ? "Go to game start" : `Go to move #${move}`;
        return (
          <li key={move}>
            <button
              onClick={() => jumpTo(move)}
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              {desc}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default MoveList;
