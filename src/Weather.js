import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Conditions from "./Conditions";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false})
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: `${response.data.name}, ${response.data.sys.country}`,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      visibility: response.data.visibility / 1000,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000
    })
  }
  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getLocation(event) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function search() {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <Header headerData={weatherData} />
          </div>
          <div className="col-6">
            <div className="Search">
              <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text">
                    <i className="fas fa-search search-icon"></i>
                  </span>
                  <input
                    autoComplete="off"
                    type="search"
                    className="form-control"
                    placeholder="Search city..."
                    aria-label="Search"
                    aria-describedby="addon-wrapping"
                    onChange={handleCityInput}
                  />
                  <input type="submit" value="Search" className="button" />
                </div>
              </form>
              <button className="button current-location" onClick={getLocation}>Current location 📍</button>
            </div>
            <Conditions conditionsData={weatherData} />
          </div>
        </div>
        <hr />
        <HourlyForecast />
        <hr />
        <DailyForecast />
      </div>
    )
  } else {
    search();
    return (
      <div className="Weather">
        Loading...
      </div>
    )
  }
}
