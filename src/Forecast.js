import React, { Component } from "react";

class Forecast extends Component {
  iterateForecast() {
    let renderForecast = [];
    for (let i = 0; i < this.props.item.list.length; i++) {
      renderForecast.push(
        <div className="hour-wrapper" key={i}>
          <p className="temp">
            {this.props.item.list[i].main.temp != null
              ? this.props.item.list[i].main.temp.toFixed()
              : ""}
            &deg;C
          </p>
          <div className="detail-wrapper">
            <p className="date">{this.props.item.list[i].dt_txt}</p>
            <p className="wind">
              Wind: {this.props.item.list[i].wind.speed} km/h
            </p>
            <p className="pressure">
              Pressure: {this.props.item.list[i].main.pressure} hPa
            </p>
          </div>
        </div>
      );

      return renderForecast;
    }
  }

  render() {
    return (
      <div className="next-hours-wrapper">
        <h2>Near future</h2>
        {this.iterateForecast()}
      </div>
    );
  }
}

export default Forecast;
