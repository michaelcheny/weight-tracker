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
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";
import userActions from "../actions/userActions";
// import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";

const SideBar = ({ theme }: { theme: string }) => {
  const { setUser, token, authenticated, setAuthenticated } = useContext(AuthContext);
  // TODO: set up a Modal component for Log In and Sign Up
  // const { showModal, setShowModal } = useState(false)

  const renderLoggedInLinks = () => {
    if (authenticated) {
      return (
        <Route
          render={({ location, history }) => (
            <>
              <SideNav
                onSelect={(selected: any) => {
                  if (selected === "logout") {
                    setUser("");
                    console.log(token);
                    userActions.logOut(token);
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
                  // display: "flex",
                  // justifyContent: "space-around",
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
                      <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.75em", marginTop: 12 }} />
                    </NavIcon>
                    <NavText>Profile</NavText>
                  </NavItem>

                  <NavItem eventKey="search">
                    <NavIcon>
                      <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.75em", marginTop: 12 }} />
                    </NavIcon>
                    <NavText>Search Food</NavText>
                  </NavItem>

                  <NavItem eventKey="meals">
                    <NavIcon>
                      <FontAwesomeIcon icon={faUtensils} style={{ fontSize: "1.75em", marginTop: 12 }} />
                    </NavIcon>
                    <NavText>Meals</NavText>
                  </NavItem>

                  <NavItem eventKey="settings">
                    <NavIcon>
                      <FontAwesomeIcon icon={faUserCog} style={{ fontSize: "1.75em", marginTop: 12 }} />
                    </NavIcon>
                    <NavText>Settings</NavText>
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
                onSelect={(selected: any) => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
                style={{
                  backgroundColor: theme,
                  // #44475A
                  // position: "relative",
                  // border: "1px red solid",
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                  <NavItem eventKey="search">
                    <NavIcon>
                      <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.75em", marginTop: 12 }} />
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
                      <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: "1.75em", marginTop: 12 }} />
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
