import React from 'react';
import { Route } from "react-router-dom";

import Signup from "../src/Components/Signup/Signup";
import Login from "./Login";


import './App.css';


function App(){
  return (
     <div className = "App" >
       <Login/>
      <Route exact path="/" Components= {Signup}/>
      
    </div>
  );
}

export default App;