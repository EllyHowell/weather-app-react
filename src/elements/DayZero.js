import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function DayZero() {
  return (
    <div id="main">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="card-body">
              <h1 id="location" class="card-title">
                LONDON
              </h1>
              <p class="card-text">
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
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
