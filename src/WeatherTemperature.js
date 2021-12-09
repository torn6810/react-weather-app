import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
    return(
        <div className="WeatherTemperature">
            <h2>
            <span className="temperature">{Math.round(props.fahrenheit)}</span>
            <span className="units">
                °F
            </span>
            </h2> 
        </div>
    );
}