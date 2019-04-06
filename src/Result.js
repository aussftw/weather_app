import React from "react";

const Result = props => {
  const temp = Math.round(props.item.temp);

  const renderForecast = props.forecastItems.list.map(function (list, index) {
    return (
      <div key={index}>
        <div key={list.dt_txt}>
          <p>{list.dt_txt}</p>
        </div>
        <div key={list.main.temp}>
          <p>{list.main.temp} C&deg;</p>
        </div>
        <div key={list.weather[0].description}>
          <p>{list.weather[0].description}</p>
        </div>
        <div key={list.wind.speed}>
          <p>{list.wind.speed} KM/H</p>
        </div>
        <div key={list.main.humidity.uniqueId}>
          <p>{list.main.humidity} %</p>
        </div>
      </div>


    )
  })





  return (
    <div>
      <h1>{props.city}</h1>
      <p>{props.item.desc}</p>
      <h3>{temp}&deg; C</h3>
      <p> wind {props.item.wind} KM/H</p>
      <h3>windchill {props.windchill}&deg; C</h3>
      <p>pressure {props.item.press} Pa</p>
      <p>humidity {props.item.humidity}</p>
      <h2>Near future</h2>
      <div>{renderForecast}</div>
    </div>
  );
}

export default Result;
