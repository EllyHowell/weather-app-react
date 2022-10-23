import Card from "react-bootstrap/Card";
import DateTimeHelper from "./DateTimeHelper";

export default function Day(props) {
  let date = new DateTimeHelper(props.data).AddDays(props.addDays + 1);

  return (
    <Card>
      <Card.Body>
        <Card.Title className="bold">
          {new DateTimeHelper(date).DayOfWeek(date)}
        </Card.Title>
        <Card.Text>{date.toISOString().split("T")[0]}</Card.Text>
        <Card.Img variant="top" src={require("../icons/icons8-sun.gif")} />
        <Card.Text>
          <span className="forecastTemp">
            <span className="bold">20 °C</span> <span>16 °C</span>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
