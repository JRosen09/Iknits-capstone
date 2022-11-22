import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link>
        <button>Home</button>
      </Link>
      <Link>
        <button>My Patterns</button>
      </Link>
      <Link>
        <button>Video Tutorials</button>
      </Link>
    </div>
  );
};

export default NavBar;
