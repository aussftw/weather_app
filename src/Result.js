import React from "react";

const Result = props => {
  const temp = Math.round(props.item.temp);

  const renderForecast = props.forecastItems.list.map(list => (
    <div>
      <div key={list.dt_txt.uniqueId}>{list.dt_txt}</div>
      <div key={list.main.temp.uniqueId}>{list.main.temp}C&deg;</div>
      <div key={list.weather[0].description.uniqueId}>
        {list.weather[0].description}
      </div>
      <div key={list.wind.speed.uniqueId}>{list.wind.speed} KM/H</div>
      <div key={list.main.humidity.uniqueId}>{list.main.humidity} %</div>
    </div>
  ));

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
};

export default Result;
