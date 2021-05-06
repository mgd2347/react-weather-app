import React from "react";
import "./Forecast.css";

export default function Forecast({ hour, temp }) {
  return (
    <div className="Forecast col-2">
      <ul>
        <li>{hour}</li>
        <li>
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt="scattered clouds"
          />
        </li>
        <li>{temp}°C</li>
        <li>Clouds</li>
      </ul>
    </div>
  );
}
