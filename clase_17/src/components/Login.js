import { Redirect } from "react-router-dom";

function Login(props) {
  return (
    <>
      {props.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h1>Login</h1>
          <button onClick={props.onLogin}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
