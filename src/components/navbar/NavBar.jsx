import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="home">
        <button>Home</button>
      </Link>
      <Link to="/patterns">
        <button>My Patterns</button>
      </Link>
      <Link to="video_tutorials">
        <button>Video Tutorials</button>
      </Link>
    </div>
  );
};

export default NavBar;
