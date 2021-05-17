import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast col-2">
      <ul>
        <li>{props.hour}</li>
        <li>
          <WeatherIcon code={props.icon}/>
        </li>
        <li>{props.temp}°C</li>
        <li>Clouds</li>
      </ul>
    </div>
  );
}
