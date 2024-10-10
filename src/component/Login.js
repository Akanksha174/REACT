import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { AuthProvider } from "./component/AuthContext";


const Login = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuthenticated ? "Welcome! You are logged in." : "Please log in."}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Login;
