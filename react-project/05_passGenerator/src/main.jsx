import { render } from "preact";
import { App } from "./app.jsx";
import { NewApp } from "./newApp.jsx";
import "./index.css";

render(<NewApp />, document.getElementById("app"));
