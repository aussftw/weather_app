import React, { Component } from "react";

import axios from "axios";

import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      actualWeather: {
        temp: null,
        wind: null,
        press: null
      },
      windchill: null,
      visible: false
    };
  }

  getWeather = e => {
    e.preventDefault();
    const API_KEY = "d4502d305d879beb12e6f13ebb40722d";
    const city = e.target.elements.city.value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&cnt=5&appid=${API_KEY}`
      )
      .then(data => {
        console.log(data);
        this.setState({
          city: data.data.name,
          actualWeather: {
            temp: data.data.main.temp,
            wind: data.data.wind.speed,
            press: data.data.main.pressure
          },
          visible: true
        });
      });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Form loadWeather={this.getWeather} />
        <Result />
      </div>
    );
  }
}

export default App;
