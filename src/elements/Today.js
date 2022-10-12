import { Card } from "react-bootstrap";
import { React } from "react";
import DateTimeHelper from "./DateTimeHelper";

export default function Today(props) {
  let dateTimeHelper = new DateTimeHelper(props.data);

  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let tempMax = Math.round(props.data.main.temp_max);
  let tempMin = Math.round(props.data.main.temp_min);

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
                <span id="today_day">{dateTimeHelper.DayOfWeek()}</span> @{" "}
                <span id="today_time">{dateTimeHelper.TimeDispay()}</span>
              </div>
              <div id="today_desc">
                <i>{props.data.weather[0].description}</i>
              </div>
              <div id="todayTemp_small">
                <span className="bold">
                  ↑ {tempMax}
                  {props.unitSymbol}
                </span>{" "}
                <span>
                  ↓ {tempMin}
                  {props.unitSymbol}
                </span>
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
                {tempMax}
                {props.unitSymbol}
              </li>
              <li id="temp_tempLow">
                {tempMin}
                {props.unitSymbol}
              </li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
