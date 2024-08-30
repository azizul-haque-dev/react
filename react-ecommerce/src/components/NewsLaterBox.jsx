import React, { useState } from "react";

function NewsLaterBox() {
  const [inputVal, setInputVal] = useState("");
  function handleSubmit(e) {
    // prevent default is not refreshing the page
    e.preventDefault();
    setInputVal("");
  }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        {" "}
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 border my-6 border-gray-300 "
      >
        <input
          type="email"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-one focus:outline-none "
        />
        <button className="bg-black text-white text-xs px-10 py-4">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLaterBox;
