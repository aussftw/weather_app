import React from "react";
import "./Result.css";

const Result = props => {
  const temp = Math.round(props.item.temp);

  const renderForecast = props.forecastItems.list.map(function (list, index) {
    return (
      <div className="forecast-item" key={index}>
        <div className="date" key={list.dt_txt}>
          <p>{list.dt_txt}</p>
        </div>
        <div className="forecast-temp" key={list.main.temp}>
          <p><i className="thermometer half icon" />{list.main.temp.toFixed()}&deg;C</p>
        </div>
        <div className="forecast-desc" key={list.weather[0].description}>
          <p>{list.weather[0].description}</p>
        </div>
        <div className="forecast-wind" key={list.wind.speed}>
          <p><i className="angle double right icon" />{list.wind.speed.toFixed()} KM/H </p>
        </div>
        <div className="forecast-humidity" key={list.main.humidity}>
          <p><i className="angle double right icon" />{list.main.humidity} %</p>
        </div>
      </div>

    )
  })

  return (
    <div>
      <div className="actual-weather-wrapper" style={{ backgroundImage: `url(${(props.img.img)})` }}>
        <h1 className="city">{props.city}</h1>
        <h3 className="temp">{temp}&deg; C</h3>
        <p className="description">{props.item.desc}</p>
        <p className="wind">Wind: {props.item.wind} KM/H</p>
        <h3 className="windchill">Feels like {props.windchill}&deg; C</h3>
        <p className="pressure">Pressure: {props.item.press} Pa</p>
        <p className="humidity">Humidity: {props.item.humidity} %</p>
      </div>

      <h2>Near future</h2>
      {renderForecast}

    </div>
  );
}

export default Result;
