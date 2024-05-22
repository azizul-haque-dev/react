import { useState, useCallback, useEffect, useRef } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [length, setLength] = useState(6);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, char, setpassword]);
  useEffect(passGenerator, [length, number, char, passGenerator]);
  const passwordRef = useRef(null);
  const copy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="container bg-gray-500 mx-auto w-3/4 p-5">
        <input
          type="text"
          className="p-2  w-3/4 rounded "
          value={password}
          readOnly
          placeholder="pass"
          ref={passwordRef}
        />
        <button className="bg-blue-600 rounded p-2" onClick={copy}>
          {" "}
          Copy
        </button>

        <div class="flex justify-center  p-5 w-full items-center space-x-2">
          <input
            onChange={(e) => setLength(e.target.value)}
            id="range"
            type="range"
            min="6"
            max="50"
            value={length}
            className=""
          />
          <label for="range" class="text-sm text-white font-medium ">
            Select range: {length}
          </label>
          <input
            onClick={() => setnumber((prev) => !prev)}
            id="checkbox"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox"
            class="text-sm text-white font-medium text-gray-90"
          >
            Number
          </label>{" "}
          <input
            onClick={() => setchar((prev) => !prev)}
            id="checkbox"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="checkbox" class="text-sm text-white font-medium ">
            Character
          </label>
        </div>
      </div>
    </>
  );
}
