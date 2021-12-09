import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    return(
        <div className="WeatherForecastDay">
            <div className="forecast-day">{props.data.dt}</div>
            <WeatherIcon iconCode={props.data.weather[0].icon} size={40}/>
            <span className="forecast-temp-min">{props.data.temp.min}°</span>
            <span className="forecast-temp-max">{props.data.temp.max}°</span>
        </div>    
    )
}