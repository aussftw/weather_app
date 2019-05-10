import React, { Component } from "react";
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Footer from "./Components/Footer/Footer";

import { DEFAULT_WEATHER_URL, DEFAULT_UNSPLASH_URL, API_KEY_WEATHER, API_KEY_UNSPLASH } from "./consts";
import "./style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      lat: null,
      long: null,
      actualWeather: {
        temp: null,
        wind: null,
        press: null,
        humidity: null,
        desc: null
      },
      windchill: null,
      visible: false,
      forecast: {
        list: []
      },
      cityBackground: {
        img: ""
      }
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  getInputWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const temp = Math.round(this.state.actualWeather.temp);
    const wind = Math.round(this.state.actualWeather.wind);

    const apiСallWeather = await fetch(`${DEFAULT_WEATHER_URL}weather?q=${city}&units=metric&appid=${API_KEY_WEATHER}`);
    const response = await apiСallWeather.json();

    this.setState({
      city: response.name,
      actualWeather: {
        temp: response.main.temp,
        wind: response.wind.speed,
        press: response.main.pressure,
        humidity: response.main.humidity,
        desc: response.weather[0].description
      },
      visible: true
    });
    const apiCallForecast = await fetch(`${DEFAULT_WEATHER_URL}forecast?q=${city}&units=metric&appid=${API_KEY_WEATHER}`);
    const forecastResponse = await apiCallForecast.json();
    const oldForecatstList = forecastResponse.list;
    const required = [7, 15, 23, 31, 39];
    const forecastList = [];
    const oldForecatstListLength = oldForecatstList.length;
    for (var i = 0; i < oldForecatstListLength; i++) {
      if (required.includes(i + 1)) {
        forecastList.push(oldForecatstList[i]);
      }
    }
    this.setState({ forecast: { list: forecastList } });

    const unsplashCall = await fetch(`${DEFAULT_UNSPLASH_URL}?page=1&per_page=10&query=${city}&client_id=${API_KEY_UNSPLASH}`);
    const unsplashResponse = await unsplashCall.json();
    this.setState({
      cityBackground: {
        img: unsplashResponse.results[0].urls.regular
      }
    });

    const windChillCalc = Math.round(
      15.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0, 16)
    );
    this.setState({ windchill: windChillCalc });
    console.log(this.state);
  };

  getCoordsWeather = async e => {
    e.preventDefault();

    const lat = this.state.lat;
    const long = this.state.long;
    const temp = Math.round(this.state.actualWeather.temp);
    const wind = Math.round(this.state.actualWeather.wind);

    const apiCall = await fetch(`${DEFAULT_WEATHER_URL}weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY_WEATHER}`);
    const response = await apiCall.json();
    this.setState({
      city: response.name,
      actualWeather: {
        temp: response.main.temp,
        wind: response.wind.speed,
        press: response.main.pressure,
        humidity: response.main.humidity,
        desc: response.weather[0].description
      },
      visible: true
    });

    const apiCallForecast = await fetch(
      `${DEFAULT_WEATHER_URL}forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY_WEATHER}`
    );
    const forecastResponse = await apiCallForecast.json();

    const oldForecatstList = forecastResponse.list;
    const required = [7, 15, 23, 31, 39];
    const forecastList = [];
    const oldForecatstListLength = oldForecatstList.length;
    for (var i = 0; i < oldForecatstListLength; i++) {
      if (required.includes(i + 1)) {
        forecastList.push(oldForecatstList[i]);
      }
    }
    this.setState({ forecast: { list: forecastList } });

    const unsplashCall = await fetch(
      `${DEFAULT_UNSPLASH_URL}/?page=1&per_page=10&query=${this.state.city}&client_id=${API_KEY_UNSPLASH}`
    );
    const unsplashResponse = await unsplashCall.json();
    this.setState({
      cityBackground: {
        img: unsplashResponse.results[0].urls.regular
      }
    });

    const windChillCalc = Math.round(
      15.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0, 16)
    );
    this.setState({ windchill: windChillCalc });

    console.log(this.state);
  };

  renderButton() {
    return (
      <div className={`coords-button ${this.state.visible === true ? "toggler" : ""}`} onClick={this.getCoordsWeather}>
        {" "}
        <i className="large location arrow icon" />{" "}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <Form loadInputWeather={this.getInputWeather} visible={this.state.visible} coordsButton={this.getCoordsWeather} />
          <div>{this.renderButton()}</div>
        </div>
        <div className={` ${this.state.visible === true ? "" : "hidden"}`}>
          <Result
            city={this.state.city}
            item={this.state.actualWeather}
            windchill={this.state.windchill}
            img={this.state.cityBackground}
            forecastItems={this.state.forecast}
          />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
