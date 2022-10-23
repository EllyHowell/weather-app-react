import Card from "react-bootstrap/Card";
import DateTimeHelper from "./DateTimeHelper";

export default function Day(props) {
  if (props.data) {
    let date = props.today.AddDays(props.daysInFuture);
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return (
      <Card>
        <Card.Body>
          <Card.Title className="bold">
            {new DateTimeHelper(date).DayOfWeek(date)}
          </Card.Title>
          <Card.Text>{date.toISOString().split("T")[0]}</Card.Text>
          <Card.Img
            variant="top"
            src={iconUrl}
            alt={props.data.weather[0].description}
          />
          <Card.Text>
            <span className="forecastTemp">
              <span className="bold">
                {props.data.temp.max}
                {props.unitSymbol}
              </span>{" "}
              <span>
                {props.data.temp.min}
                {props.unitSymbol}
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
