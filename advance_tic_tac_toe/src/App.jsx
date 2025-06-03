// App.jsx
import React from "react";
import Board from "./components/Board";
import MoveList from "./components/MoveList";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXIsNext] = React.useState(true);

  const currentSquares = history[stepNumber];
  const winner = calculateWinner(currentSquares);

  function handleClick(i) {
    const sliced = history.slice(0, stepNumber + 1);
    const current = sliced[sliced.length - 1];
    if (current[i] || winner) return;

    const nextSquares = current.slice();
    nextSquares[i] = xIsNext ? "x" : "o";

    setHistory([...sliced, nextSquares]);
    setStepNumber(sliced.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(move) {
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  }

  const status = winner
    ? `🏆 Winner: ${winner.toUpperCase()}`
    : `Next player: ${xIsNext ? "❌" : "⭕"}`;
  console.log(history);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold mb-6">Tic Tac Toe</h1>
      <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
        <p className="mb-4 text-lg font-medium">{status}</p>
        <Board squares={currentSquares} onClick={handleClick} />
        <MoveList history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default App;
