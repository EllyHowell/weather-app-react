import Day from "./Day";
import { React } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    // console.log(response.data);
  }

  if (props.weatherData) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weatherData.coord.lat}&lon=${props.weatherData.coord.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <Row xs={1} md={2} lg={5} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col key={idx}>
            <Day data={props.weatherData} addDays={idx} />
          </Col>
        ))}
      </Row>
    );
  } else {
    <Card id="forecast">
      <Card.Body>Loading...</Card.Body>
    </Card>;
  }
}
