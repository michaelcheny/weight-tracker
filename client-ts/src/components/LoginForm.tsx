import React, { useState, useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
// import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";
// import Errors from "../components/Errors";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store";
import { saveToken, setAuthState } from "../features/auth/authSlice";
import { setUser, fetchUser } from "../features/auth/userSlice";

type Input = {
  email: string;
  password: string;
};

type LoginFormProps = {
  showLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ showLogin }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const { token, setUser, setAuthenticated } = useContext(AuthContext);

  const [error, setError] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm<Input>();

  const onSubmit = (data: Input) => {
    console.log(data);
    const loginInfo = { token, email: data.email, password: data.password };
    // redux stuff
    const thing = dispatch(fetchUser(loginInfo));
    if (!Object.keys(thing).includes("errors")) {
      showLogin(false);
      dispatch(setAuthState(true));
    } else {
      setError(true);
    }
    console.log(thing);
    // apiActions.logIn(token, data.email, data.password).then((data) => {
    //   if (!Object.keys(data).includes("errors")) {
    //     // setUser(data);
    //     // setAuthenticated(true);

    //     dispa
    //     dispatch(setUser(data));
    //   } else {
    //   }
    // });
  };

  const outsideNode = useClickOutside(() => showLogin(false));

  return (
    <div className="form-modal">
      <form className="signup-form" ref={outsideNode} onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        {error && "Invalid Credentials"}
        <div>
          <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
          {errors.email && "This field is required"}
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password && "This field is required"}
          <input type="submit" value="Log In" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
