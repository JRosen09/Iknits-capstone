import React from "react";

const Auth = () => {
  return (
    <div>
      <form>
        <input type="First Name" placeholder="First Name" />
        <input type="email address" placeholder="email address" />
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
      Auth
    </div>
  );
};

export default Auth;
