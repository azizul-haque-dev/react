import { useEffect, useState } from "react";
import { ThemeProvier } from "./Context/Theme";
import Card from "./Component/Card";
import ThemeBtn from "./Component/ThemeBtn";
import "./App.css";

function App() {
  const [themeMode, setTheme] = useState("light");
  const darkMode = () => setTheme("dark");
  const lightMode = () => setTheme("light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvier value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvier>
  );
}

export default App;
