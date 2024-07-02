import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import State from "./Components/State";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <State />
        <Footer />
      </div>
    </div>
  );
}

export default App;
