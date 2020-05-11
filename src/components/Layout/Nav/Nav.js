import React from "react";

import "./Nav.css";
import { NavLink } from "react-router-dom";

const nav = (props) => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT THIS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
