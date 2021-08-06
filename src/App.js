import React from 'react';
import './App.css';
import Signup from './components/Signup';
import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", backgroundColor: "#cacacc" }}>
        <div className="w-100" style={{ maxWidth: "400px", backgroundColor: "hsl(323, 85%, 34%" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>

  );
}

export default App;
