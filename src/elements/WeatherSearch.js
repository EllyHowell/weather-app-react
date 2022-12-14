import Today from "./Today";
import { React } from "react";
import { Card } from "react-bootstrap";

export default function WeatherSearch(props) {
  if (props.weatherData) {
    return (
      <Today
        data={props.weatherData}
        unitSymbol={props.unit === "imperial" ? "°F" : "°C"}
        windMetric={props.unit === "imperial" ? "mps" : "mph"}
      />
    );
  } else {
    <Card id="today">
      <Card.Body>Loading...</Card.Body>
    </Card>;
  }
}
