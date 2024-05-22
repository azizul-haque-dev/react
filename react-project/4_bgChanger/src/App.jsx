import { useState } from "react";

import "./App.css";

function App() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "black",
    "brown"
  ];
  const [color, setcolor] = useState(colors[0]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colors.map((btncolor) => (
              <button
                onClick={() => setcolor(btncolor)}
                key={btncolor}
                style={{ backgroundColor: btncolor }}
                className="text-white px-3 rounded-lg"
              >
                {" "}
                {btncolor.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
