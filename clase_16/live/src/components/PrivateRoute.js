import { Route, Redirect } from "react-router-3";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
