export default function DayZero() {
  return (
    <div className="DayZero">
      <div id="day0" className="row mb-2">
        <div className="col-12 col-lg-2">
          <img
            id="day0_icon"
            src={require("../icons/icons8-sun.gif")}
            width="150"
            alt="Weather Icon"
          />
        </div>
        <div id="day0_information" className="col-9 col-lg-8">
          <h1 id="location">LONDON</h1>
          <div id="day0_dayTime">
            <span id="day0_day">THURSDAY</span> @{" "}
            <span id="day0_time">4:20 PM</span>
          </div>
          <div id="day0_desc">broken clouds</div>
          <div id="day0_humidityWind">
            <strong>Humidity: </strong>
            <span id="day0_humidity">84%</span> | <strong>Wind: </strong>
            <span id="day0_wind">3.6 km/h</span>
          </div>
        </div>
        <div id="day0_temp" className="col-3 col-lg-2">
          <ul>
            <li id="day0_tempHigh" className="bold">
              20 °C
            </li>
            <li id="day0_tempLow">16 °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
