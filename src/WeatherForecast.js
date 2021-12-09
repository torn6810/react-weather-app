import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function getForecast(response){
    console.log(response);
    }
   
    let apiKey = "1a865f34c72d6db62ee55e7dce90a4b3";
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let units=`imperial`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(getForecast);

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thur</div>
                    <WeatherIcon iconCode="13d" size={40}/>
                    <span className="forecast-temp-min">5°</span>
                    <span className="forecast-temp-max">28°</span>
                </div>
                <div className="col">
                    <div className="forecast-day">Thur</div>
                    <WeatherIcon iconCode="13d" size={40}/>
                    <span className="forecast-temp-min">5°</span>
                    <span className="forecast-temp-max">28°</span>
                </div>
                <div className="col">
                    <div className="forecast-day">Thur</div>
                    <WeatherIcon iconCode="13d" size={40}/>
                    <span className="forecast-temp-min">5°</span>
                    <span className="forecast-temp-max">28°</span>
                </div>
                <div className="col">
                    <div className="forecast-day">Thur</div>
                    <WeatherIcon iconCode="13d" size={40}/>
                    <span className="forecast-temp-min">5°</span>
                    <span className="forecast-temp-max">28°</span>
                </div>
                <div className="col">
                    <div className="forecast-day">Thur</div>
                    <WeatherIcon iconCode="13d" size={40}/>
                    <span className="forecast-temp-min">5°</span>
                    <span className="forecast-temp-max">28°</span>
                </div>
            </div>
        </div>
    )
}
