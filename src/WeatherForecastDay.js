import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props){
    function minTemperature(){
        let temperature=Math.round(props.data.temp.min);
        return `${temperature}`;
    }
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    function day(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay();
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return(
        <div className="WeatherForecastDay">
            <div className="forecast-day">{day()}</div>
            <WeatherIcon iconCode={props.data.weather[0].icon} size={40}/>
            <span className="forecast-temp-min">{minTemperature()}°</span>
            <span className="forecast-temp-max">{maxTemperature()}°</span>
        </div>    
    )
}