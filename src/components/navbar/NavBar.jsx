import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/patterns">
        <button>My Patterns</button>
      </NavLink>
      <NavLink to="/vids">
        <button>Video Tutorials</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
