import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { UserContext } from "../context/UserContext";
import userActions from "../actions/userActions";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";
// import { StyledDiv, input, StyledButton } from "../styles/Forms";

// TODO: Incoporate this thing as a Modal from the side nav - click on log in or register to pop up a form
const LoginPage = () => {
  const { setUser, token, authenticated, setAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  // const [inputRef, setInputRef] = useFocus();

  // useEffect(() => {
  //   userActions.fetchToken().then((token) => setToken(token));
  // }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    userActions.logIn(token, email, password).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
      } else {
        setErrors(true);
        setErrorMessages(data.errors);
      }
    });
  };

  return (
    <>
      {authenticated ? <Redirect to="/dashboard" /> : null}

      <h3>Log In</h3>
      {errors ? <ErrorMessages errors={errorMessages} /> : null}
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          // ref={email}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /> */}

          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              event.keyCode === 13 ? handleSubmit : null
            }
            required
          />

          {/* <input type="submit" value="Log In" /> */}
          <button onClick={handleSubmit}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
