import logo from "./logo.svg";
import "./App.css";
import Greet from "./commonents/Greet";
import Welcome from "./commonents/Welcome";
import Hello123 from "./commonents/hello";

function App() {
  return (
    <div className="App">
      <Greet Name="Siraj">
        <p>This is Computer Science Student</p>
      </Greet>

      <Greet Name="abc">
        <button>Action </button>
      </Greet>

      <Greet Name="bcd">
        <button>Kill me </button>
      </Greet>

      <p>this is Welcome Starting from here</p>

      <Welcome Name="Siraj" />
      <Welcome Name="dcs" />
      <Welcome Name="daa" />

      {/* <Hello123 /> */}
    </div>
  );
}

export default App;
