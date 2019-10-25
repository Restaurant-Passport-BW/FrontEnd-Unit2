import React from 'react';
import {Route, Switch} from "react-router-dom";

import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


import './App.css';


function App(){
  return (
    <div className = "App" >
      <Switch>
      <Route  path="/Signup" component={Signup}/>
      <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

