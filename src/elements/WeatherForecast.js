import Day from "./Day";
import { React } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function WeatherForecast(props) {
  if (props.weatherData) {
    return (
      <Row xs={1} md={2} lg={5} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col key={idx}>
            <Day data={props.weatherData} />
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
