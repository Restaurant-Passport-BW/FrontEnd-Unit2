import React, {useEffect, useState} from 'react';
import axios from "axios";
import Restaurants from './Restaurants';
import {Link} from 'react-router-dom'
const RestaurantList = () => {

    const [rest, setRest] = useState([]);
  
    useEffect(() => {
        const getRest =() => {
        axios
        .get('https://foodie-passport.herokuapp.com/rpp/restaurants')
        .then(res => { console.log("respponse", res.data)
            setRest(res.data);
        })
    
        .catch(error => ('server error', error));

    }
        getRest();
    },[]);

    return (
        <div>
            <h1>List</h1>
            {rest.map(resta => (
                <RestaurantDetails key={resta.id} restaurant={resta} />
            ))}
        </div>
    );
}


const RestaurantDetails = ({restaurant}) => {
    console.log("detaill", restaurant)
     const {id, name, address, phone_number, city_id  } = restaurant;
    return (
        <Link to={`/restaurants/city/${id}`} >
        <div>
            <h1>{name}</h1>
            <h3>Address: {address}</h3>
            <h3>Phone: {phone_number}</h3>
        </div>
        </Link>
    
    )
    
    }
export default RestaurantList;