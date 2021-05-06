import React from "react";
import Header from "./Header";
import Search from "./Search";
import Conditions from "./Conditions";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <Header />
        </div>
        <div className="col-6">
          <Search />
          <Conditions />
        </div>
      </div>
      <hr />
      <div className="row">
        <Forecast hour="00:00" temp={14} />
        <Forecast hour="03:00" temp={13} />
        <Forecast hour="06:00" temp={12} />
        <Forecast hour="09:00" temp={15} />
        <Forecast hour="12:00" temp={21} />
        <Forecast hour="15:00" temp={19} />
      </div>
    </div>
  );
}
