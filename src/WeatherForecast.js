import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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
