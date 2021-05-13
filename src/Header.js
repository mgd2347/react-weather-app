import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  let now = new Date();
  
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
  function formatDate(timestamp) {
    let date = new Date(timestamp);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[date.getMonth()];
    
    let fullDate = `${weekDay} ${day}, ${month} ${formatHours(timestamp)}`;
    return (fullDate);
  }
  function displayHeader(response) {
    setWeatherData({
      city: `${response.data.name}, ${response.data.sys.country}`,
      date: formatDate(now),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      imgAlt: response.data.weather[0].description,
      temp: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like
    })
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Header">
        <h1 className="city">{weatherData.city}</h1>
        <small>{weatherData.date}</small>
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
