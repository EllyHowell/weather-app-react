import axios from "axios";
import Today from "./Today";
import { React, useState } from "react";
import { Card } from "react-bootstrap";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState(null);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  function HandleResponse(response) {
    setWeatherData(response.data);
  }

  axios.get(url).then(HandleResponse);
  if (weatherData) {
    return <Today data={weatherData} />;
  } else {
    <Card id="today">
      <Card.Body>Loading...</Card.Body>
    </Card>;
  }
}
