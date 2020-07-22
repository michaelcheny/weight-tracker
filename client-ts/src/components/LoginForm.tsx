import React from "react";

const LoginForm = () => {
  return (
    <div className="form-modal">
      <form>
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
