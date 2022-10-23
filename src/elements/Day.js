import Card from "react-bootstrap/Card";

export default function Day(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="bold">SUNDAY</Card.Title>
        <Card.Text>18.09.22</Card.Text>
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
