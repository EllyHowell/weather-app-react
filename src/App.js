import "./App.css";
import "./styles/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import "./styles/HeaderFooter.css";

function App() {
  return (
    <div className="App">
      <Header />
      Hello World
      <Footer />
    </div>
  );
}

export default App;
