import React from 'react';
import './App.css';
import AdminPage from './components/AdminPage';
import Analogies from './components/Analogies';
import Chest_Fav from './components/Chest_Fav';
import Display from './components/Display';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Splash_Search from './components/Splash_Search';
import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#cacacc" }}>
      <div className="w-100" style={{ maxWidth: "400px", backgroundColor: "hsl(323, 85%, 34%" }}>
        <Router>
          <AuthProvider>
            <Switch>
<Route path="/signup" component={Signup} />

<Route exact path="/" component={Splash_Search} />

<Route exact 
path="/adminpage" component={AdminPage} />
<Route exact 
path="/analogies" component={Analogies} />
<Route exact 
path="/chest_fav" component={Chest_Fav} />
<Route exact 
path="/display" component={Display} />
<Route exact 
path="/login" component={Login} />
<Route exact 
path="/profile" component={Profile} />

      
              
            </Switch>

          </AuthProvider>


        </Router>
      </div>
    </Container>


  );
}

export default App;
