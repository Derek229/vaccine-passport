import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated, user } = useContext(AuthContext);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        (authenticated && (user.role === "verifier" || user.role==="admin"))  ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;