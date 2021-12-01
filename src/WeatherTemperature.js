import React from "react";

export default function WeatherTemperature(props){
    return(
        <div className="WeatherTemperature">
            <span className="temperature">Temperature: {Math.round(props.fahrenheit)}</span>
            <span className="unit">°F | {" "}
                <a href="/" onClick={showCelsius}>
                    °C 
                </a> 
            </span> 
        </div>
    )
}