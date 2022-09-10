import "./App.css";
import "./styles/Main.css";
import "./styles/Reactive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import "./styles/HeaderFooter.css";

import DayZero from "./elements/DayZero";
import "./styles/Day.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="Main" className="container container-fluid">
        <DayZero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
