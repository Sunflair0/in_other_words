import React from 'react';
import './App.css';
import AdminPage from './components/AdminPage';
import Analogies from './components/Analogies';
import Chest_Fav from './components/Chest_Fav';
import Display from './components/Display';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Splash_Search from './components/Splash_Search';
import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './shared/ProtectedRoutes';

function App() {

  return (

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#cacacc" }}>
      <div className="w-100" style={{ maxWidth: "400px", backgroundColor: "hsl(323, 85%, 34%" }}>
        <Router>
          <AuthProvider>
            <Switch>
<ProtectedRoute path="/signup" component={Signup} />

<ProtectedRoute exact path="/" component={Splash_Search} />

<ProtectedRoute path="/adminpage" component={AdminPage} />
<ProtectedRoute path="/profile" component={Profile} />
<ProtectedRoute path="/analogies" component={Analogies} />
<ProtectedRoute path="/chest_fav" component={Chest_Fav} />
<ProtectedRoute path="/display" component={Display} />
<ProtectedRoute path="/login" component={Login} />
<ProtectedRoute path="/forgotpassword" component={ForgotPassword} />



      
              
            </Switch>

          </AuthProvider>


        </Router>
      </div>
    </Container>


  );
}

export default App;
