import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to={"/"}>
          {" "}
          <h3> Store</h3>
        </NavLink>
      </div>
      <ul className="menu">
        <NavLink to={"/"}>
          {" "}
          <li className="list"> Home</li>
        </NavLink>

        <NavLink to={"/cart"}>
          {" "}
          <li className="list"> Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
