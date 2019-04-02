import React, { Component } from "react";

class NextHoursWeather extends Component {
  iterateForecast() {
    const required = [8, 16, 24, 32, 40];
    let renderForecast = [];
    const oldForecatstListLength = this.props.item.list.length;
    for (var i = 0; i < oldForecatstListLength; i++) {
      if (required.includes(i + 1)) {
        renderForecast.push(
          <div className="hour-wrapper" key={i}>
            {/* <div
              className={`weather-icon ${
                this.props.item.list[i].weather[0].icon === true
                  ? ""
                  : "ui-" + this.props.item.list[i].weather[0].icon
              }`}
            /> */}
            <p className="temp">
              {this.props.item.list[i].main.temp != null
                ? this.props.item.list[i].main.temp.toFixed()
                : ""}
              &deg;C
            </p>
            <div className="detail-wrapper">
              <p className="date">{this.props.item.list[i].dt_txt}</p>
              <p className="description">
                {this.props.item.list[i].weather[0].description}
              </p>
              <p className="wind">
                Wiatr: {this.props.item.list[i].wind.speed} km/h
              </p>
              <p className="pressure">
                Ciśnienie: {this.props.item.list[i].main.pressure} hPa
              </p>
            </div>
          </div>
        );
        console.log(renderForecast);
      }
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
export default NextHoursWeather;
