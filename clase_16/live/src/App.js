import { Router, Route, browserHistory } from "react-router-3";
import Home from "./components/Home";
import About from "./components/About";
import Main from "./components/Main";
import Article from "./components/Article";
import NotFound from "./components/NotFound";

function App() {
  // Rutas definidas como objeto
  /*
  const routes = [
    {
      path: "/",
      component: Home,
      childRoutes: [
        {
          path: "/main",
          component: Main,
        },
        {
          path: "/about",
          component: About,
        },
      ],
    },
    {
      path: "/article(/:id)",
      component: Article,
    },
    {
      path: "*",
      component: NotFound,
    },
  ];

  Si se quiere usar esta forma quitar los componentes Routes definidos como hijos de Router
  y pasarle el objeto como prop bajo routes

  Ej: 
    <Router history={browserHistory} routes={routes} />
  */

  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
        </Route>
        <Route path="/article(/:id)" component={Article} />
        <Route path="*" component={NotFound} />
      </Router>
    </div>
  );
}

export default App;
