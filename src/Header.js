import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Header.css";

export default function Header() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  
  function displayHeader(response) {
    console.log(response.data.dt * 1000);
    setWeatherData({
      loaded: true,
      city: `${response.data.name}, ${response.data.sys.country}`,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      imgAlt: response.data.weather[0].description,
      temp: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like
    })
  }
  if (weatherData.loaded) {
    return (
      <div className="Header">
        <h1 className="city">{weatherData.city}</h1>
        <FormattedDate date={weatherData.date} />
        <h5 className="description">{weatherData.description}</h5>
        <h2>
          <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
          <span>{Math.round(weatherData.temp)}</span>°
          <span className="units">
            <a href="/" className="active">
              C
            </a>{" "}
            |<a href="/"> F</a>
          </span>
        </h2>
        <small>
          <strong>{Math.round(weatherData.max)}° ·</strong> {Math.round(weatherData.min)}°
        </small>
        <h6>Feels like {Math.round(weatherData.feelsLike)}°</h6>
      </div>
    );
  } else {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let city = `Lisbon`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayHeader);
    return (
      "Loading..."
    );
  }
}
