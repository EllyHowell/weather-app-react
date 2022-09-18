import "./App.css";

import "./elements/styles/HeaderFooter.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

import "./elements/styles/Day.css";
import Day from "./elements/Day";
import Today from "./elements/Today";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="Main">
        <Today />

        <Row id="forecast" xs={1} sm={3} xl={6} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Day />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
