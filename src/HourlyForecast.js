import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  return (
    <div className="HourlyForecast row">
      <small>3-hour Forecast</small>
      <div className="col-2">
        <ul>
          <li>{props.hour}</li>
          <li>
            <WeatherIcon code={"01d"} />
          </li>
          <li>{15}°C</li>
          <li>Clouds</li>
        </ul>
      </div>
      
    </div>
  );
}
