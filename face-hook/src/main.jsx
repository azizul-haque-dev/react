import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthPorvider } from "./Provider/AuthProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPorvider>
      <Router>
        <App />
      </Router>
    </AuthPorvider>
  </StrictMode>
);
