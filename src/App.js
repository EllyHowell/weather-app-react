import "./App.css";
import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./elements/styles/HeaderFooter.css";
import Footer from "./elements/Footer";

import WeatherSearch from "./elements/WeatherSearch";

import "./elements/styles/Day.css";
import Day from "./elements/Day";
import Today from "./elements/Today";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  let [welcomeMessage, setWelcomeMessage] = useState(null);
  let [city, setCity] = useState("Sydney");

  window.onload = function () {
    SetHeaderWelcomeMessage();
  };

  function SetHeaderWelcomeMessage() {
    var hour = new Date().getHours();
    if (hour > 5 && hour < 12) {
      setWelcomeMessage("Good Morning");
    } else if (hour > 11 && hour < 18) {
      setWelcomeMessage("Good Afternoon");
    } else {
      setWelcomeMessage("Good Evening");
    }
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    console.log(city);
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
            <Form className="d-flex">
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
            </Form>
          </Navbar>
        </Container>
      </Navbar>
      <div id="Main">
        <WeatherSearch city={city} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
