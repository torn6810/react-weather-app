import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return(
      <div className="WeatherInfo">
          <div className="row">
              <div className="col"> 
              <h2>{props.weatherData.city}</h2>
              </div>
              <div className="col">
              <WeatherTemperature fahrenheit={props.weatherData.temperature}/>
              </div>
          </div>
          <ul>
            <li className="day"><FormattedDate date={props.weatherData.date}/></li>
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