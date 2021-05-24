import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);
  
  function day() {
    let date = new Date(props.data.dt * 1000);
    let weekDay = date.getDay();
    let monthDay = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[weekDay]} ${monthDay}`;
  }


  return (
    <div className="ForecastDay col-2">
      <ul>
        <li className="day">{day()}</li>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} />
        </li>
        <li>{max}°C · <span className="min">{min}°C</span></li>
        <li className="daily-description">{props.data.weather[0].description}</li>
      </ul>
    </div>
  )
}