import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import HomePage from "./containers/HomePage";
// import LoginPage from "./containers/LoginPage";
import ProfilePage from "./containers/ProfilePage";

function App() {
  const [user, setUser] = useState("");
  // const [token, setToken] = useState("");

  const fetchToken = async () => {
    const res = await fetch("http://localhost:3001/auth-check", {
      credentials: "include",
    });
    const data = await res.json();
    return data.csrf_auth_token;
  };
  useEffect(() => {
    // const token = localStorage.getItem("token");
    fetchToken().then((token) => {
      fetch("http://localhost:3001/auto-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          console.log(data);
        });
    });
    // console.log(token);
    console.log(document.cookie);
    // const cookie = document.cookie.split("; ")[0].split("=")[1];
    // const sesh = document.cookie.split(" ")[1].split("=")[1];
    // if (sesh === "true") {
    // }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Router>
          <Switch>
            <main>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/login" component={LoginPage} /> */}
              <Route path="/profile" component={ProfilePage} />
            </main>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
