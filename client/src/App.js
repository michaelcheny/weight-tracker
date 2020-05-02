import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import HomePage from "./containers/HomePage";
// import LoginPage from "./containers/LoginPage";
import ProfilePage from "./containers/ProfilePage";
import Dashboard from "./containers/Dashboard";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  faUser,
  faHouseUser,
  faUtensils,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    const res = await fetch("http://localhost:3001/auth-check", {
      credentials: "include",
    });
    const data = await res.json();
    setToken(data.csrf_auth_token);
    return data.csrf_auth_token;
  };

  useEffect(() => {
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
  }, []);

  return (
    <UserContext.Provider value={{ user, token }}>
      <div className="App">
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    if (!selected) {
                      console.log(selected);
                      // LOG OUT FUNCTIONALITY HERE
                    } else {
                      const to = "/" + selected;
                      if (location.pathname !== to) {
                        history.push(to);
                      }
                    }
                  }}
                  style={{
                    backgroundColor: "#282A36",
                    // #44475A
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="dashboard">
                    {/* HOME */}
                    <NavItem eventKey="dashboard">
                      <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
                        <FontAwesomeIcon
                          icon={faHouseUser}
                          style={{ fontSize: "1.75em", marginTop: 12 }}
                        />
                      </NavIcon>
                      <NavText>Dashboard</NavText>
                    </NavItem>
                    {/* PROFILE */}
                    <NavItem eventKey="profile">
                      <NavIcon>
                        {/* <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        /> */}
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ fontSize: "1.75em", marginTop: 12 }}
                        />
                      </NavIcon>
                      <NavText>Profile</NavText>
                    </NavItem>
                    {/*  */}
                    <NavItem eventKey="meals">
                      <NavIcon>
                        <FontAwesomeIcon
                          icon={faUtensils}
                          style={{ fontSize: "1.75em", marginTop: 12 }}
                        />
                      </NavIcon>
                      <NavText>Meals</NavText>
                    </NavItem>
                    {/*  */}
                    <NavItem>
                      <NavIcon>
                        <FontAwesomeIcon
                          icon={faSignOutAlt}
                          style={{ fontSize: "1.75em", marginTop: 12 }}
                        />
                      </NavIcon>
                      <NavText>Log Out</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <Switch>
                  <main>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/dashboard" component={Dashboard} />
                  </main>
                </Switch>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
