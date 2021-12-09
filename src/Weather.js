import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';


export default function Weather(props) {
    const [city, setCity] = useState(props.city);
    const [weather, setWeather] = useState("");
    
    function displayWeather(response) {
      console.log(response);
      setWeather({
        //now: new Date(),
        coordinates: response.data.coord,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon
      });
    }
    function searchWeather(){
      let apiKey = "1a865f34c72d6db62ee55e7dce90a4b3";
      let units = `imperial`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(displayWeather);
    }
    function handleSubmit(event) {
      event.preventDefault();
      searchWeather();
    }
    function updateCity(event) {
      setCity(event.target.value);
    }
    let form = (
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} autoFocus="on"/>
        <input type="submit" value="Search" />
      </form>
    );
    if (weather) {
      return (
        <div className="WeatherSearchForm">
          {form}
          <WeatherInfo weatherData={weather}/>
          <WeatherForecast coordinates={weather.coordinates}/>
        </div>
      );
    } else {
      searchWeather();
      return (
      "Searching for weather..."
        );
    }
  }
