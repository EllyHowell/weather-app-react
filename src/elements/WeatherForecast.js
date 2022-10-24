import Day from "./Day";
import { React, useState } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import DateTimeHelper from "./DateTimeHelper";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data);
  }

  if (props.weatherData) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weatherData.coord.lat}&lon=${props.weatherData.coord.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    if (forecastData) {
      return (
        <Row xs={1} md={2} lg={5} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col key={idx}>
              <Day
                data={forecastData.daily[idx]}
                today={new DateTimeHelper(props.weatherData)}
                daysInFuture={idx}
                unitSymbol={props.unit === "imperial" ? "°F" : "°C"}
              />
            </Col>
          ))}
        </Row>
      );
    }
  }

  return (
    <Card id="forecast">
      <Card.Body>Loading...</Card.Body>
    </Card>
  );
}
