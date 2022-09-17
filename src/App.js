import "./App.css";

import "./elements/styles/HeaderFooter.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

import "./elements/styles/Day.css";
import DayZero from "./elements/DayZero";

function App() {
  return (
    <div className="App">
      <Header />
      <DayZero />
      <Footer />
    </div>
  );
}

export default App;
