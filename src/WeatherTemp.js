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
          <span>
            {Math.round(props.celsius)}°
          </span>
          <span className="units">
            <span className="active">
              C
            </span>{" "}
            |<a href="/" onClick={showFahrenheit}> F</a>
          </span>
        </h2>
        <div className="extraTemps">
          <strong>{Math.round(props.celsiusMax)}° ·</strong> {Math.round(props.celsiusMin)}°
          <br />
          Feels like {Math.round(props.celsiusFeelsLike)}°
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h2>
          <span>
            {convertToFahrenheit(props.celsius)}°
          </span>
          <span className="units">
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            |<span className="active"> F</span>
          </span>
        </h2>
        <div className="extraTemps">
          <strong>{convertToFahrenheit(props.celsiusMax)}° ·</strong> {convertToFahrenheit(props.celsiusMin)}°
          <br />
          Feels like {convertToFahrenheit(props.celsiusFeelsLike)}°
        </div>
      </div>
    );
  }
}