import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      actualWeather: {
        temp: null,
        wind: null,
        press: null,
        humidity: null
      },
      windchill: null,
      visible: false,
      forecast: []
    };
  }

  getWeather = async e => {
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

    this.setState({ forecast: forecastResponse.list });

    //const apiCallCoords = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=lat=35&lon=139&units=metric&appid=${API_KEY}`
    //);
    //const responseCallCoords = await apiCallCoords.json();
    //console.log(responseCallCoords);

    const windChillCalc = Math.round(
      15.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0, 16)
    );
    this.setState({ windchill: windChillCalc });

    //  console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Form loadWeather={this.getWeather} />
        <Result
          city={this.state.city}
          item={this.state.actualWeather}
          windchill={this.state.windchill}
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
