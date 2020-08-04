import React, { useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import apiActions from "../helpers/apiActions";
import { AuthContext } from "../context/AuthContext";
// import Errors from "../components/Errors";
import { useForm } from "react-hook-form";

type Input = {
  email: string;
  password: string;
};

type LoginFormProps = {
  showLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ showLogin }: LoginFormProps) => {
  const { token, setUser, setAuthenticated } = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm<Input>();

  const onSubmit = (data: Input) => {
    console.log(data);
    apiActions.logIn(token, data.email, data.password).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
        showLogin(false);
      }
    });
  };

  const outsideNode = useClickOutside(() => showLogin(false));

  return (
    <div className="form-modal">
      <form ref={outsideNode} onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        {/* {error && <Errors errors={errMsgs} />} */}
        <div>
          <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <input type="submit" value="Log In" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
