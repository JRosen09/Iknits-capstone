import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/auth.css";

const Auth = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/home");
  };

  return (
    <div className="authpg">
      <h1>Welcome!</h1>
      <h3>First Sign In</h3>
      <form>
        <input type="First Name" placeholder="First Name" />
        <input type="email address" placeholder="email address" />
        <button className="submitbtn" onClick={() => handlelogin()}>
          Submit
        </button>
      </form>
      Auth
    </div>
  );
};

export default Auth;
