import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import RestaurantList from './RestaurantList';
import { Route, Router } from "react-router-dom";
import Restaurants from './Restaurants';
import City from './City'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={City} />
     <Route path='/restaurant/city/:id' render={props => (<Restaurants  {...props} />)} />
     <City />
    </div>
  );
}

export default App;
