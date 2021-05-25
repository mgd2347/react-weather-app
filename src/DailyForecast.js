import React, { useState,  useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css"

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="DailyForecast row">
        <small>Daily Forecast</small>
        {dailyForecast.map(function (forecast, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={forecast} /> 
              </div>
            ); 
          } else {
            return null;
          }
        })}
      </div>
    ); 
  } else {
    const apiKey = "6f57e84bdcf65c7e46537056925d0c97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}