import { Card } from "react-bootstrap";

export default function Today() {
  return (
    <Card id="today">
      <Card.Body>
        <div className="container">
          <div className="details justifyLeft">
            <div className="image">
              <img
                id="today_icon"
                src={require("../icons/icons8-sun.gif")}
                alt="Weather Icon"
              />
            </div>
            <div className="text">
              <h1>LONDON</h1>
              <div>
                <span id="today_day">THURSDAY</span> @{" "}
                <span id="today_time">4:20 PM</span>
              </div>
              <div id="today_desc">broken clouds</div>
              <div id="today_humidityWind">
                <strong>Humidity: </strong>
                <span id="today_humidity">84%</span> | <strong>Wind: </strong>
                <span id="today_wind">3.6 km/h</span>
              </div>
            </div>
          </div>
          <div id="today_temp" className="details justifyRight">
            <ul>
              <li className="bold" id="today_tempHigh">
                20 °C
              </li>
              <li id="temp_tempLow">16 °C</li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
