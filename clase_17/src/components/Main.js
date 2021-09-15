import { Route, Link } from "react-router-dom";
import Vlog from "./Vlog";
import Blog from "./Blog";

function Main() {
  return (
    <div>
      <h1>Main</h1>

      <ul>
        <li>
          <Link to="/main/vlog">Vlogs</Link>
        </li>
        <li>
          <Link to="/main/blog">Blogs</Link>
        </li>
      </ul>

      <Route path="/main/vlog/:id?" component={Vlog} />
      <Route path="/main/blog/:id?">
        {(props) => {
          return <Blog {...props} />;
        }}
      </Route>
    </div>
  );
}

export default Main;
