import "./App.css";
import { React, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./elements/styles/Day.css";
import "./elements/styles/HeaderFooter.css";

import Footer from "./elements/Footer";
import WeatherSearch from "./elements/WeatherSearch";
import DateTimeHelper from "./elements/DateTimeHelper";

function App() {
  let [city, setCity] = useState("Sydney");
  let [weatherData, setWeatherData] = useState(null);
  let [welcomeMessage, setWelcomeMessage] = useState("");

  function HandleResponse(response) {
    setWeatherData(response.data);
    setWelcomeMessage(new DateTimeHelper(response.data).WelcomeMessage());
  }

  window.onload = function () {
    APICall();
  };

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function APICall() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios
      .get(url)
      .then(HandleResponse)
      .catch(function (error) {
        if (city) {
          alert(`${city} is not a valid city name`);
        }
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    APICall();
  }

  return (
    <div className="App">
      <Navbar id="Header" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand id="WelcomeMessage" href=".">
            {welcomeMessage}
          </Navbar.Brand>
          <Navbar id="SearchContainer">
            <Nav className="me-auto" navbarScroll></Nav>
            <form className="d-flex">
              <Form.Control
                id="SearchBar"
                type="search"
                placeholder="Enter a city name ..."
                aria-label="Search"
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Search</Button>
              <Button>Current</Button>
              <Button>°C</Button>
            </form>
          </Navbar>
        </Container>
      </Navbar>
      <div id="Main">
        <WeatherSearch weatherData={weatherData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
