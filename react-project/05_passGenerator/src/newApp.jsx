import { useState, useCallback, useEffect, useRef } from "preact/hooks";

export function NewApp() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";
    let pass = "";
    for (let index = 1; index <= length; index++) {
      let randomNumber = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNumber);
    }
    setPassword(pass);
  }, [length, number, char]);
  useEffect(() => {
    generatePassword();
  }, [length, number, char, generatePassword]);

  return (
    <>
      <div className="container bg-gray-500 mx-auto w-3/4 p-5">
        <input
          type="text"
          value={password}
          className="p-2  w-3/4 rounded "
          readOnly
          placeholder="pass"
        />
        <button className="bg-blue-600 rounded p-2"> Copy</button>

        <div class="flex justify-center  p-5 w-full items-center space-x-2">
          <input
            onChange={(e) => setLength(e.target.value)}
            id="range"
            type="range"
            min="6"
            max="30"
            value={length}
            className=""
          />
          <label class="text-sm text-white font-medium ">
            Select range: {length}
          </label>
          <input
            id="checkbox"
            type="checkbox"
            onClick={() => setNumber((prev) => !prev)}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox"
            class="text-sm text-white font-medium text-gray-90"
          >
            Number
          </label>{" "}
          <input
            onClick={() => setChar((prev) => !prev)}
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
