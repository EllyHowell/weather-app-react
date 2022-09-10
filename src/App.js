import "./App.css";

const backgroundImage = require("./images/clouds.jpg");
const divStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  position: "absolute",
};

function App() {
  return (
    <div className="App" style={divStyle}>
      Hello World
    </div>
  );
}

export default App;
