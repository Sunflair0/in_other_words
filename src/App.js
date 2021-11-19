import React, { useContext, useEffect } from "react";
import './App.css';
import AdminPage from './components/AdminPage';
import Analogies from './components/Analogies';
import Chest from './components/Chest';
import Display from './components/Display';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Search from './components/Search';
import useFetch from "./hooks/useFetch";
import ProtectedRoute from "./shared/ProtectedRoutes";
import { UserContext, TreasureContext, SearchContext } from './contexts';
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const { callAPI: getTreasures } = useFetch("GET");
  const { username, logout } = useContext(UserContext);
  const { clearTreasures, setTreasures } = useContext(TreasureContext);
  const { clearSearch } = useContext(SearchContext);

  useEffect(() => {
    if (username === null) {
      return;
    }
    async function call() {
      const res = await getTreasures(`/api/treasures/user/`);
      if (!res.success) {
        return console.error(res.error);
      }
      setTreasures(res.data);
    }
    call();
  }, [username]);

  return (

    <div className=""
      style={{ minHeight: "100vh", backgroundColor: "#cacacc" }}>
      <div className="w-100" style={{ maxWidth: "400px", backgroundColor: "hsl(323, 85%, 34%" }}>
        <Router>
      <nav className="flex-wrap">
        {!username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/signup"
            >
              Signup
            </NavLink>
          </>
        )}
        {username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/treasures"
            >
              Treasures
            </NavLink>
            <NavLink
              className="link text-center"
              to="/login"
              onClick={() => {
                logout();
                clearTreasures();
                clearSearch();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
    <main>
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
       </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
