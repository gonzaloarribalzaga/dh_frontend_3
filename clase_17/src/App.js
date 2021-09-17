import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Login from "./components/Login";

import PrivateRoute from "./components/PrivateRoute";

/**
 * withRouter es un High order component (HOC) aplica cierta lógica sobre un componente
 * en este caso específico le pasa los props match, location, y history al componente
 * extendido, en caso de que el componente necesite info sobre el ruteo pero no sea
 * parte de un Route
 */
const NavBarWithRouter = withRouter(NavBar);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBarWithRouter />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <PrivateRoute
              path="/profile"
              isAuthenticated={this.state.isAuthenticated}
              redirectTo="/login"
            >
              <Profile />
            </PrivateRoute>
            <Route path="/login">
              <Login
                onLogin={this.handleLogin}
                isAuthenticated={this.state.isAuthenticated}
              />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
