import React from 'react';
import logo from './logo.svg';
import Signup from './Components/Signup';
import Login from './Components/login'
import {
  Route
} from "react-router-dom"

import './App.css';


function App() {
  return ( <
    div className = "App" >
    <
    Route path = "/Signup"
    component = {
      Signup
    }
    /> <
    Route exact path = "/"
    component = {
      Login
    }
    /> <
    /div>
  );
}

export default App;