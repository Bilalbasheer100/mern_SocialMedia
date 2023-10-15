import React from 'react'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
 import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
const {user}=useContext(AuthContext)
console.log(user);
  return (
    <Router>
      <Routes>
      <Route path="/" element={user?<Home/>:<Register/>} />
      <Route path="/login" element={user?<Navigate to= '/'/> : <Login/>} />
      <Route path="/register"  element={user?<Navigate to= '/'/> : <Register/>} />
      <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
