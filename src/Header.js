import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="city">{props.headerData.city}</h1>
      <FormattedDate date={props.headerData.date} />
      <h5 className="description">{props.headerData.description}</h5>
      <div>
        <WeatherIcon code={props.headerData.icon} />
        <WeatherTemp celsius={props.headerData.temp} celsiusMax={props.headerData.max} celsiusMin={props.headerData.min} celsiusFeelsLike={props.headerData.feelsLike} />
      </div>
     </div>
  );
}
