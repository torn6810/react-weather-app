import React, {useState} from "react";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    function displayWeather(response) {
      console.log(response);
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
  
    let form = (
      <form onSubmit={searchWeather}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
    if (weather) {
      return (
        <div className="WeatherSearchForm">
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°F</li>
            <li>Humidity: {Math.round(weather.humidity)} %</li>
            <li>Description: {weather.description}</li>
            <li>Wind: {Math.round(weather.wind)} m/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      );
    } else {
      return form;
    }
    function searchWeather(event) {
      event.preventDefault();
      let apiKey = "1a865f34c72d6db62ee55e7dce90a4b3";
      let units = `imperial`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(displayWeather);
    }
  }