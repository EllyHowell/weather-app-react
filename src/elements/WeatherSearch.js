import Today from "./Today";
import Day from "./Day";
import { React } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function WeatherSearch(props) {
  if (props.weatherData) {
    return (
      <div>
        <Today
          data={props.weatherData}
          unitSymbol={props.unit === "imperial" ? "°F" : "°C"}
          windMetric={props.unit === "imperial" ? "mps" : "mph"}
        />
        <Row xs={1} md={2} lg={6} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Day />
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    <Card id="today">
      <Card.Body>Loading...</Card.Body>
    </Card>;
  }
}
