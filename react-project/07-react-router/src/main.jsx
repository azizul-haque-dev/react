import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Github, { GithubLoder } from "./Github/Github";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}>
        {" "}
      </Route>
      <Route path="about" element={<About />}>
        {" "}
      </Route>
      <Route path="contact" element={<Contact />}>
        {" "}
      </Route>{" "}
      <Route loder={GithubLoder} path="gitHub" element={<Github />}>
        {" "}
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
