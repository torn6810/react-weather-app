import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]=useState("fahrenheit");

    function showCelsiusUnits(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheitUnits(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function calculateCelsius(){
        return (props.fahrenheit - 32) * 5/9; 
    } 

    if (unit==="fahrenheit"){
    return(
        <div className="WeatherTemperature">
            <span className="temperature">Temperature: {Math.round(props.fahrenheit)}</span>
            <span className="units">{" "}°F | {" "}
                <a href="/" onClick={showCelsiusUnits}>
                °C 
                </a> 
            </span> 
        </div>
    );
} else{
    return (
        <div className="WeatherTemperature">
            <span className="temperature">Temperature: {Math.round(calculateCelsius())}</span>
            <span className="units"> 
                <a href="/" onClick={showFahrenheitUnits}> 
                °F
                </a> 
                | {" "} °C 
            </span> 
        </div>
    );
}
}