import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href=".">Good Morning</Navbar.Brand>
        <Navbar id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
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
