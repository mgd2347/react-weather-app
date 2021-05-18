import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(response) {
    return Math.round((response * 1.8) + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <h2>
          <span >
            {Math.round(props.celsius)}°
          </span>
          <span className="units">
            <span className="active">
              C
            </span>{" "}
            |<a href="/" onClick={showFahrenheit}> F</a>
          </span>
        </h2>
        
        <div>
          <strong>{Math.round(props.celsiusMax)}° ·</strong> {Math.round(props.celsiusMin)}°
        </div>
        <h6>Feels like {Math.round(props.celsiusFeelsLike)}°</h6>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span >
          {convertToFahrenheit(props.celsius)}°
        </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          |<span className="active"> F</span>
        </span>
        <div className="extraTemps">
          <strong>{convertToFahrenheit(props.celsiusMax)}° ·</strong> {convertToFahrenheit(props.celsiusMin)}°
          Feels like {convertToFahrenheit(props.celsiusFeelsLike)}°
        </div>
      </div>
    );
  }
}