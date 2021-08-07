import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from ".../contexts/AuthContext";

export default function ProtectedRoute({ path, currentUser, children }) {
  const { username } = useContext(AuthContext);
  if ((username && currentUser) || (!username && !currentUser)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Redirect to={currentUser ? "/login" : "/splash_search"} />;
  }
}
