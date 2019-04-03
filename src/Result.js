import React from "react";

const Result = props => {
  const temp = Math.round(props.item.temp);
  return (
    <div>
      <h1>{props.city}</h1>
      <p>{props.item.desc}</p>
      <h3>{temp}&deg; C</h3>
      <p> wind {props.item.wind} km/h</p>
      <h3>windchill {props.windchill}&deg; C</h3>
      <p>pressure {props.item.press} Pa</p>
      <p>humidity {props.item.humidity} %</p>

      <h2>Near future</h2>
      <div>
        {props.forecastItems.list.map(list => (
          <div>
            <div className="forecastDate" key={list.dt_txt}>
              {list.dt_txt}
            </div>
            <div className="forecastTemp" key={list.main.temp}>
              {list.main.temp} C&deg;
            </div>
            <div className="forecastDesc" key={list.weather[0].description}>
              {list.weather[0].description}
            </div>
            <div className="forecastHumidity" key={list.main.humidity}>
              {list.main.humidity} %
            </div>
            <div className="forecastWind" key={list.wind.speed}>
              {list.wind.speed} KM/H
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
