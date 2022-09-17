import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar id="Header" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand id="WelcomeMessage" href=".">
          Good Morning
        </Navbar.Brand>
        <Navbar id="SearchContainer">
          <Nav className="me-auto" navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              id="SearchBar"
              type="search"
              placeholder="Enter a city name ..."
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-success">Current</Button>
            <Button variant="outline-success">°C</Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
  );
}
