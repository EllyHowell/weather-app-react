import { Card } from "react-bootstrap";
import { React, useState } from "react";

export default function Today(props) {
  function GetTimeDispay(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var suffix = hours > 12 ? "PM" : "AM";
    return hours + ":" + minutes + " " + suffix;
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let tempMax = Math.round(props.data.main.temp_max);
  let tempMin = Math.round(props.data.main.temp_min);

  let unixTimeStamp = props.data.dt;
  let milliseconds = unixTimeStamp * 1000 + props.data.timezone * 1000;
  var date = new Date(milliseconds + new Date().getTimezoneOffset() * 60000);

  return (
    <Card id="today">
      <Card.Body>
        <div className="container">
          <div className="details justifyLeft">
            <div className="image">
              <img
                id="today_icon"
                src={iconUrl}
                alt={props.data.weather[0].description}
              />
            </div>
            <div className="text">
              <h1>{props.data.name.toUpperCase()}</h1>
              <div>
                <span id="today_day">
                  {weekday[date.getDay()].toUpperCase()}
                </span>{" "}
                @ <span id="today_time">{GetTimeDispay(date)}</span>
              </div>
              <div id="today_desc">
                <i>{props.data.weather[0].description}</i>
              </div>
              <div id="todayTemp_small">
                <span className="bold">↑ {tempMax} °C</span>{" "}
                <span>↓ {tempMin} °C</span>
              </div>
              <div id="today_humidityWind">
                <strong>Humidity: </strong>
                <span id="today_humidity">
                  {Math.round(props.data.main.humidity)}%
                </span>{" "}
                | <strong>Wind: </strong>
                <span id="today_wind">{props.data.wind.speed} km/h</span>
              </div>
            </div>
          </div>
          <div id="today_temp" className="details justifyRight">
            <ul>
              <li className="bold" id="today_tempHigh">
                {tempMax} °C
              </li>
              <li id="temp_tempLow">{tempMin} °C</li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
