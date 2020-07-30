import React, { useState, useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";
import Errors from "../components/Errors";

type Input = {
  email: string;
  password: string;
};

type LoginFormProps = {
  showLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ showLogin }: LoginFormProps) => {
  const { token, setUser, setAuthenticated } = useContext(AuthContext);

  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<boolean>(false);
  const [errMsgs, setErrMsgs] = useState<string[]>([]);

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(token);
    console.log(input.email);
    console.log(input.password);
    apiActions.logIn(token, input.email, input.password).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
        showLogin(false);
      } else {
        setError(true);
        setErrMsgs(data.errors);
      }
    });
    // setInput({
    //   email: "",
    //   password: "",
    // });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({ ...input, [event.target.name]: event.target.value });

  const outsideNode = useClickOutside(() => showLogin(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode} onSubmit={handleLogin}>
        <h1>Log In</h1>
        {error && <Errors errors={errMsgs} />}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
          />
          <input type="submit" value="Log In" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
