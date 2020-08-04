import React, { useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";

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
      </form>
    </div>
  );
};

export default SignupForm;
