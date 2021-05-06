import React from "react";
import "./Conditions.css";

export default function Conditions() {
  let weatherConditions = {
    humidity: "55",
    wind: "17",
    visibility: "10",
    sunrise: "06:47",
    sunset: "18:43"
  };
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
}
