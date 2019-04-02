import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Forecast from "./Forecast";
import Footer from "./Footer/Footer";
import "./App.css";

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
        humidity: null
      },
      windchill: null,
      visible: false,
      forecast: {
        list: ""
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
    const API_KEY = "d4502d305d879beb12e6f13ebb40722d";
    const city = e.target.elements.city.value;
    const temp = this.state.actualWeather.temp;
    const wind = this.state.actualWeather.wind;

    const apiСallWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const response = await apiСallWeather.json();

    this.setState({
      city: response.name,
      actualWeather: {
        temp: response.main.temp,
        wind: response.wind.speed,
        press: response.main.pressure,
        humidity: response.main.humidity
      },
      visible: true
    });
    const apiCallForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const forecastResponse = await apiCallForecast.json();
    // const oldForecatstList = forecastResponse.list;
    // const required = [8, 16, 24, 32, 40];
    // const forecastList = [];
    // const oldForecatstListLength = oldForecatstList.length;
    // for (var i = 0; i < oldForecatstListLength; i++) {
    //   if (required.includes(i + 1)) {
    //     forecastList.push(oldForecatstList[i]);
    //   }
    // }

    this.setState({ forecast: { list: forecastResponse.list } });

    const windChillCalc = Math.round(
      15.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0, 16)
    );
    this.setState({ windchill: windChillCalc });
  };

  getCoordsWeather = async e => {
    e.preventDefault();
    const API_KEY = "d4502d305d879beb12e6f13ebb40722d";
    const lat = this.state.lat;
    const long = this.state.long;
    const temp = this.state.actualWeather.temp;
    const wind = this.state.actualWeather.wind;

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
    );
    const response = await apiCall.json();
    this.setState({
      city: response.name,
      actualWeather: {
        temp: response.main.temp,
        wind: response.wind.speed,
        press: response.main.pressure,
        humidity: response.main.humidity
      },
      visible: true
    });
    const apiCallForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
    );
    const forecastResponse = await apiCallForecast.json();
    // const oldForecatstList = forecastResponse.list;
    // const required = [8, 16, 24, 32, 40];
    // const forecastList = [];
    // const oldForecatstListLength = oldForecatstList.length;
    // for (var i = 0; i < oldForecatstListLength; i++) {
    //   if (required.includes(i + 1)) {
    //     forecastList.push(oldForecatstList[i]);
    //   }
    // }
    this.setState({ forecast: { list: forecastResponse.list } });

    const windChillCalc = Math.round(
      15.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0, 16)
    );
    this.setState({ windchill: windChillCalc });
  };

  renderButton() {
    return <button onClick={this.getCoordsWeather}> Weather near me </button>;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Form loadInputWeather={this.getInputWeather} />
        {this.state.visible ? (
          <div>
            <Result
              city={this.state.city}
              item={this.state.actualWeather}
              windchill={this.state.windchill}
              forecastItems={this.state.forecast}
            />
            <Forecast item={this.state.forecast} />
          </div>
        ) : null}

        {this.renderButton()}
        <Footer />
      </div>
    );
  }
}

export default App;
