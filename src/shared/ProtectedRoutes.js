import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function ProtectedRoute({ path, reqUser, children }) {
  const { username } = useContext(UserContext);
  if ((username && reqUser) || (!username && !reqUser)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={reqUser ? "/login" : "/search"} />;
  }
}

export default ProtectedRoute;
