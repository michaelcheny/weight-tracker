import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  faUser,
  faHouseUser,
  faUtensils,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";

const SideBar = ({ theme }) => {
  return (
    <Route
      render={({ location, history }) => (
        <>
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
              backgroundColor: theme,
              // #44475A
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="dashboard">
              {/* HOME */}
              <NavItem eventKey="dashboard">
                <NavIcon>
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
          {/* <Switch>
                  <main>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/dashboard" component={Dashboard} />
                  </main>
                </Switch> */}
        </>
      )}
    />
  );
};

export default SideBar;
