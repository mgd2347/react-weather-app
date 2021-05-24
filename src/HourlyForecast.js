import React, { useState } from "react";
import axios from "axios";
import ForecastHour from "./ForecastHour";
import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourlyForecast, setHourlyForecast] = useState(null);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    console.log(response.data.hourly);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="HourlyForecast row">
        <small>Hourly Forecast</small>
        <ForecastHour data={hourlyForecast[0]} />
        <ForecastHour data={hourlyForecast[1]} />
        <ForecastHour data={hourlyForecast[2]} />
        <ForecastHour data={hourlyForecast[3]} />
        <ForecastHour data={hourlyForecast[4]} />
        <ForecastHour data={hourlyForecast[5]} />
      </div>
    );
  } else {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
