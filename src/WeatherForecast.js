import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    const [loaded, setLoaded]=useState(false)
    const [forecast, setForecast]=useState(null);

    useEffect(()=>{
    setLoaded(false);
    }, [props.coordinates]);

    function getForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);    
    }

    if (loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
            {forecast.map((dailyForecast, index)=>{
                if (index < 5) {
                return(
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                    </div>
                );
              } else{
                  return null;
              }
            })}  
            </div>
        </div>
    );
} else{
    let apiKey = "1a865f34c72d6db62ee55e7dce90a4b3";
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let units=`imperial`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getForecast);
    return null;
}
}
