import React from 'react';
import {Route, } from "react-router-dom";

import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


import './App.css';


function App(){
  return (
    <div className = "App" >
      
           <Route  path="/Signup" component={Signup}/>
            <Route exact path="/" component={Login}/>
          
    </div>
  );
}

export default App;

