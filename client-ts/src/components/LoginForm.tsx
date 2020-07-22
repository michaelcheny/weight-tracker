import React from "react";
import { useClickOutside } from "../helpers/useClickOutside";
const LoginForm = ({ showLogin }: any) => {
  const outsideNode = useClickOutside(() => showLogin(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode}>
        <h1>Log In</h1>
        <div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Log In" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
