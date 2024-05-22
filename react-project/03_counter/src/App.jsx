import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCount] = useState(15);
  const addValue = () => {
    setCount(counter !== 20 ? counter + 1 : 20);
  };
  const removeValue = () => {
    setCount(counter !== 0 ? counter - 1 : 0);
  };

  return (
    <>
      <h1 className="bg-slate-300 border w-72 rounded-lg mx-auto text-2xl p-2 mb-3">
        Counter value{" "}
        <span className=" p-1 w-10 mx-2 bg-slate-200 border test-lg rounded-md ">
          {" "}
          {counter}
        </span>
      </h1>
      <div className="container flex justify-center   ">
        <button
          className="outline-none w-24 m-2 bg-green-500 px-4 py-1 rounded-full text-white shadow-lg"
          onClick={addValue}
        >
          Add{" "}
        </button>{" "}
        <br />
        <button
          className="outline-none w-24 m-2  bg-red-500 px-4 py-1 rounded-full text-white shadow-lg"
          onClick={removeValue}
        >
          Remove{" "}
        </button>
      </div>
    </>
  );
}

export default App;
