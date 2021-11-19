import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Chest from "./components/Chest";
import Login from "./components/Login";
import ProtectedRoute from "./shared/ProtectedRoute";
import Search from "./components/Search";
import Signup from "./components/SignUp";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <ProtectedRoute path="/login" reqUser={false}>
          <Login /></ProtectedRoute>
        <ProtectedRoute path="/signup" reqUser={false} >
          <Signup /></ProtectedRoute>
        <ProtectedRoute path="/adminpage" reqUser={true}>
          <AdminPage /></ProtectedRoute>
        <ProtectedRoute
          path="/analogies" reqUser={true} >
          <Analogies /></ProtectedRoute>
        <ProtectedRoute
          path="/chest" reqUser={true} >
          <Chest /></ProtectedRoute>
        <ProtectedRoute
          path="/search" reqUser={true} >
          <Search /></ProtectedRoute>
        <ProtectedRoute
          path="/display" reqUser={true} >
          <Display /></ProtectedRoute>
        <ProtectedRoute
          path="/profile" reqUser={true} >
          <Profile /></ProtectedRoute>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
