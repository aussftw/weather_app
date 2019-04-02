import React from "react";

const Result = props => {
  return (
    <div>
      <h1>{props.city}</h1>
      <h3>{props.item.temp}&deg; C</h3>
      <p> wind {props.item.wind} km/h</p>
      <h3>{props.windchill}&deg; C</h3>
      <p>pressure {props.item.press}</p>
      <p>humidity {props.item.humidity}</p>
    </div>
  );
};

export default Result;
