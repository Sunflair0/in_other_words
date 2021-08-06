import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProtectedRoute({ path, currentUser, children }) {
  const { username } = useContext(UserContext);
  if ((username && currentUser) || (!username && !currentUser)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={currentUser ? "/login" : "/search"} />;
  }
}

export default ProtectedRoute;
