import React from "react";
import "./Header.css";

export default function Header() {
  let weatherData = {
    city: "Lisbon, Pt",
    date: "Sun 14, Mar 23:00",
    description: "Clear Sky",
    imgUrl: "https://openweathermap.org/img/wn/01n@2x.png",
    imgAlt: "clear sky",
    temp: 13,
    max: 15,
    min: 11,
    feelsLike: 11
  };
  return (
    <div className="Header">
      <h1 className="city">{weatherData.city}</h1>
      <small>{weatherData.date}</small>
      <h5 className="description">{weatherData.description}</h5>
      <h2>
        <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
        <span>{weatherData.temp}</span>°
        <span className="units">
          <a href="/" className="active">
            C
          </a>{" "}
          |<a href="/"> F</a>
        </span>
      </h2>
      <small>
        <strong>{weatherData.max}° ·</strong> {weatherData.min}°
      </small>
      <h6>Feels like {weatherData.feelsLike}°</h6>
    </div>
  );
}
