import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast row">
      <small>Daily Forecast</small>
      <div className="col-2">
        <ul>
          <li>{props.hour}</li>
          <li>
            <WeatherIcon code={"01d"} />
          </li>
          <li>17°C · <span className="min">15°C</span></li>
          <li>Clouds</li>
        </ul>
      </div>
    </div>
  );
}