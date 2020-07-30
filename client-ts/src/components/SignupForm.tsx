import React, { useState, useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";
import Errors from "../components/Errors";

type Input = {
  email: string;
  password: string;
  password_confirmation: string;
};

type SignupFormProps = {
  showSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignupForm = ({ showSignup }: SignupFormProps) => {
  const { token, setUser, setAuthenticated } = useContext(AuthContext);

  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState<boolean>(false);
  const [errMsgs, setErrMsgs] = useState<string[] | undefined>([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(token);
    console.log(
      `email: ${input.email}; password: ${input.password}; passwordconf: ${input.password_confirmation}`
    );
    apiActions.register(token, input).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
        showSignup(false);
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

  const outsideNode = useClickOutside(() => showSignup(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode} onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <Errors errors={errMsgs} />}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={input.password_confirmation}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Register" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
