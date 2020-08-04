import React, { useState, useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";
import Errors from "../components/Errors";

import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  password_confirmation: string;
};

type SignupFormProps = {
  showSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignupForm = ({ showSignup }: SignupFormProps) => {
  const { token, setUser, setAuthenticated } = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    apiActions.register(token, data).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
        showSignup(false);
      }
    });
  };

  // const [input, setInput] = useState<Inputs>({
  //   email: "",
  //   password: "",
  //   password_confirmation: "",
  // });

  // const [error, setError] = useState<boolean>(false);
  // const [errMsgs, setErrMsgs] = useState<string[] | undefined>([]);

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   console.log(token);
  //   console.log(
  //     `email: ${input.email}; password: ${input.password}; passwordconf: ${input.password_confirmation}`
  //   );
  //   apiActions.register(token, input).then((data) => {
  //     if (!Object.keys(data).includes("errors")) {
  //       setUser(data);
  //       setAuthenticated(true);
  //       showSignup(false);
  //     } else {
  //       setError(true);
  //       setErrMsgs(data.errors);
  //     }
  //   });
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setInput({ ...input, [event.target.name]: event.target.value });

  const outsideNode = useClickOutside(() => showSignup(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode} onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div>
          <input name="email" type="email" ref={register({ required: true })} placeholder="Email" />
          {errors.email && <span>This field is required</span>}

          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6, maxLength: 30 })}
            placeholder="Password"
          />
          {errors.password && <span>This field is required</span>}

          <input
            name="password_confirmation"
            type="password"
            ref={register({ required: true, minLength: 6, maxLength: 30 })}
            placeholder="Confirm Password"
          />
          {errors.password_confirmation && <span>Please confirm your password</span>}

          <input type="submit" />
        </div>

        {/* {error && <Errors errors={errMsgs} />}
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
        </div> */}
      </form>
    </div>
  );
};

export default SignupForm;
