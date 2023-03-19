import { useState, useEffect, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { AuthContext } from "../contexts/AuthProvider";
import AddCityForm from "../components/AddCityForm";
import CityCard from "../components/CityCard";


export default function Home() {
    const {user, login} = useContext(AuthContext)
    const {cities} =useContext(DataContext)

    return (
        <div>
            {
                
                (!user.loggedIn) ?
                <div id="loggedout">
                <div id='title'>
                <h1>Welcome to my Weather App</h1>
                <h1>Please Login to continue</h1>
                </div>
                <div id='loginbutton'>
                <button id='btn' onClick={login}>Login</button>
                </div>
                </div>
                :
                <div id="loggedin">
                    <div id='header'>
                    <h1>Welcome {user.displayName}!</h1>
                    <h2>Here are your cities below:</h2>
                    <div id="cards">
                        <AddCityForm />
                        {cities.map((city) => <CityCard city={city} key={city.id}/>)}
                        
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}