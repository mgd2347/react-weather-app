import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastHour.css";

export default function ForecastHour(props) {
  let temp = Math.round(props.data.temp)
  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`
  }
  return (
    <div className="ForecastHour">
      <ul>
        <li>{hour()}</li>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} />
        </li>
        <li>{temp}°C</li>
        <li className="hourly-description">{props.data.weather[0].description}</li>
      </ul>
    </div>
  )
}