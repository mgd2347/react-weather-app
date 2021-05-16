import React from "react";
import "./Conditions.css";

export default function Conditions(props) {
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
  
  return (
    <ul className="Conditions">
      <li>
        Humidity: <span>{props.conditionsData.humidity}</span>%
      </li>
      <li>
        Wind: <span>{props.conditionsData.wind}</span> km/h
      </li>
      <li>
        Visibility: <span>{props.conditionsData.visibility}</span> km
      </li>
      <li>
        Sunrise: <span>{formatHours(props.conditionsData.sunrise)}</span>
      </li>
      <li>
        Sunset: <span>{formatHours(props.conditionsData.sunset)}</span>
      </li>
    </ul>
  );
}
