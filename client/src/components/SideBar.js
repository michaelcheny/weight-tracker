import React, { useContext } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  faUser,
  faHouseUser,
  faUtensils,
  faSignInAlt,
  faSignOutAlt,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import { logOut } from "../actions/userActions";
import { UserContext } from "../context/UserContext";

const SideBar = ({ theme }) => {
  const { setUser, token, authenticated, setAuthenticated } = useContext(UserContext);

  const renderLoggedInLinks = () => {
    if (authenticated) {
      return (
        <Route
          render={({ location, history }) => (
            <>
              <SideNav
                onSelect={(selected) => {
                  if (selected === "logout") {
                    setUser("");
                    console.log(token);
                    logOut(token);
                    setAuthenticated(false);
                  } else {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }
                }}
                style={{
                  backgroundColor: theme,
                  // #44475A
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                  <NavItem eventKey="dashboard">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faHouseUser}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Dashboard</NavText>
                  </NavItem>

                  <NavItem eventKey="profile">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Profile</NavText>
                  </NavItem>

                  <NavItem eventKey="search">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Search Food</NavText>
                  </NavItem>

                  <NavItem eventKey="meals">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faUtensils}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Meals</NavText>
                  </NavItem>

                  <NavItem eventKey="logout">
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
            </>
          )}
        />
      );
    } else {
      return (
        <Route
          render={({ location, history }) => (
            <>
              <SideNav
                onSelect={(selected) => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
                style={{
                  backgroundColor: theme,
                  // #44475A
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="search">
                  <NavItem eventKey="search">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Search Food</NavText>
                  </NavItem>

                  <NavItem eventKey="login">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Log In</NavText>
                  </NavItem>

                  <NavItem eventKey="registration">
                    <NavIcon>
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        style={{ fontSize: "1.75em", marginTop: 12 }}
                      />
                    </NavIcon>
                    <NavText>Registration</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
            </>
          )}
        />
      );
    }
  };

  return <div>{renderLoggedInLinks()}</div>;
};

export default SideBar;
