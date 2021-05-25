import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastHour from "./ForecastHour";
import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }
  
  if (loaded) {
    return (
      <div className="HourlyForecast row">
        <small>Hourly Forecast</small>
        {hourlyForecast.map(function (forecast, index) {
          if (index < 6) {
            return (
              <div className="col-2" key={index}>
                <ForecastHour data={forecast} />
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
