import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css"

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="DailyForecast row">
        <small>Daily Forecast</small>
        <ForecastDay data={dailyForecast[0]} />
        <ForecastDay data={dailyForecast[1]} />
        <ForecastDay data={dailyForecast[2]} />
        <ForecastDay data={dailyForecast[3]} />
        <ForecastDay data={dailyForecast[4]} />
        <ForecastDay data={dailyForecast[5]} />
      </div>
    ); 
  } else {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}