import logo from "./logo.svg";
import "./App.css";
import Xray from "./XRay";

function App() {
  return (
    <div className="App">
      <h1>openLayer</h1>
      <div className="image-container">
        <div className="doubles">
          <Xray />
          <Xray />
        </div>
        <div className="doubles">
          <Xray />
          <Xray />
        </div>
      </div>
    </div>
  );
}

export default App;
