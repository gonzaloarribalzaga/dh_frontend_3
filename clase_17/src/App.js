import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
