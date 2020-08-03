import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { UserContext } from "./context/UserContext";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import ProfilePage from "./containers/ProfilePage";
import DashboardPage from "./containers/DashboardPage";
import SideBar from "./components/SideBar";
// import userActions from "./actions/userActions";
import AuthProvider from "./context/AuthContext";
import NoMatch from "./components/NoMatch";
import RegistrationPage from "./containers/RegistrationPage";
import NavBar from "./components/NavBar";
import SettingsPage from "./containers/SettingsPage";
import FoodSearchPage from "./containers/FoodSearchPage";
import GlobalStyle, { MainWrapper, InnerWrapper } from "./styles/globalStyles";

function App() {
  // const [user, setUser] = useState("");
  // const [token, setToken] = useState("");
  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   userActions.fetchToken().then((token) => {
  //     setToken(token);
  //     fetch("/auto-login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "X-CSRF-TOKEN": token,
  //       },
  //       credentials: "include",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (!Object.keys(data).includes("errors")) {
  //           console.log(data);
  //           setUser(data);
  //           setAuthenticated(true);
  //         }
  //       });
  //   });
  // }, []);

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <div>
            <MainWrapper>
              <SideBar theme="#282A36" />
              {/* <main> */}
              <InnerWrapper>
                <NavBar />
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/profile" component={ProfilePage} />
                  <Route path="/dashboard" component={DashboardPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/registration" component={RegistrationPage} />
                  <Route path="/settings" component={SettingsPage} />
                  <Route path="/search" component={FoodSearchPage} />
                  <Route component={NoMatch} />
                </Switch>
              </InnerWrapper>
            </MainWrapper>
            {/* </main> */}
            {/* <Footer /> */}
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
