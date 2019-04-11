import React from "react";
import "./Result.css";

const Result = props => {
  const temp = Math.round(props.item.temp);

  const renderForecast = props.forecastItems.list.map(function (list, index) {
    return (
      <div key={index}>
        <div key={list.dt_txt}>
          <p>{list.dt_txt}</p>
        </div>
        <div key={list.main.temp}>
          <p>Temperature:{list.main.temp} C&deg;</p>
        </div>
        <div key={list.weather[0].description}>
          <p>{list.weather[0].description}</p>
        </div>
        <div key={list.wind.speed}>
          <p>Windspeed: {list.wind.speed} KM/H</p>
        </div>
        <div key={list.main.humidity.uniqueId}>
          <p>humidity: {list.main.humidity} %</p>
        </div>
      </div>
    )
  })

  return (
    <div className="actual-weather-wrapper" style={{ backgroundImage: `url(${(props.img.img)})` }}>
      <h1>{props.city}</h1>
      <p className="description">{props.item.desc}</p>
      <h3 className="temp">{temp}&deg; C</h3>
      <p className="wind">Wind: {props.item.wind} KM/H</p>
      < h3 className="windchill">Feels like {props.windchill}&deg; C</h3>
      <p className="pressure">Hressure {props.item.press} Pa</p>
      <p className="humidity">Humidity {props.item.humidity} %</p>
      <div className="next-hours-wrapper">
        <h2>Near future</h2>
        {renderForecast}
      </div>
    </div>
  );
}

export default Result;
