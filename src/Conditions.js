import React, { useState } from "react";
import axios from "axios";
import "./Conditions.css";

export default function Conditions() {
  const [loaded, setLoaded] = useState(false);
  const [weatherConditions, setWeatherConditions] = useState({});
  
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  function displayWeatherConditions(response) {
    setWeatherConditions({
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      visibility: response.data.visibility / 1000,
      sunrise: formatHours(response.data.sys.sunrise * 1000),
      sunset: formatHours(response.data.sys.sunset * 1000)
    })
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <ul className="Conditions">
        <li>
          Humidity: <span>{weatherConditions.humidity}</span>%
        </li>
        <li>
          Wind: <span>{weatherConditions.wind}</span> km/h
        </li>
        <li>
          Visibility: <span>{weatherConditions.visibility}</span> km
        </li>
        <li>
          Sunrise: <span>{weatherConditions.sunrise}</span>
        </li>
        <li>
          Sunset: <span>{weatherConditions.sunset}</span>
        </li>
      </ul>
    );  
  } else {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let city = `Lisbon`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
    return (
      "Loading..."
    );
  }

}
