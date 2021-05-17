import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="city">{props.headerData.city}</h1>
      <FormattedDate date={props.headerData.date} />
      <h5 className="description">{props.headerData.description}</h5>
      <h2>
        <WeatherIcon code={props.headerData.icon} />
        <span className="temp">{Math.round(props.headerData.temp)}</span>°
        <span className="units">
          <a href="/" className="active">
            C
          </a>{" "}
          |<a href="/"> F</a>
        </span>
      </h2>
      <small>
        <strong>{Math.round(props.headerData.max)}° ·</strong> {Math.round(props.headerData.min)}°
      </small>
      <h6>Feels like {Math.round(props.headerData.feelsLike)}°</h6>
    </div>
  );
}
