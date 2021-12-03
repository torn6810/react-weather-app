import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.weatherData.city}</h1>
             <ul>
            <li className="day"><FormattedDate date={props.weatherData.date}/></li>
            <WeatherTemperature fahrenheit={props.weatherData.temperature}/>
            <li>Humidity: {Math.round(props.weatherData.humidity)} %</li>
            <li className="text-capitalize">Description: {props.weatherData.description}</li>
            <li>Wind: {Math.round(props.weatherData.wind)} m/h</li>
            <li>
              <WeatherIcon iconCode={props.weatherData.icon} alt={props.weatherData.description} size={60}/>
            </li>
          </ul>
        </div>
    )
}