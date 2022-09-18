import "./App.css";

import "./elements/styles/HeaderFooter.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

import "./elements/styles/Day.css";
import Day from "./elements/Day";
import Today from "./elements/Today";
import { CardGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="Main">
        <Today />
        <CardGroup id="forecast">
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </CardGroup>
      </div>
      <Footer />
    </div>
  );
}

export default App;
