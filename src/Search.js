import React from "react";
import "./Search.css";

export default function Search() {
   return (
    <div className="Search">
      <form>
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fas fa-search search-icon"></i>
          </span>
          <input
            autoComplete="off"
            type="search"
            className="form-control"
            placeHolder="Search city..."
            aria-label="Search"
            aria-describedby="addon-wrapping"
          />
          <input type="submit" value="Search" className="button" />
        </div>
      </form>
      <button className="button current-location">Current location</button>
    </div>
  );
}
