import logo from "./logo.svg";
import "./App.css";
import Greet from "./commonents/Greet";
import Welcome from "./commonents/Welcome";
import Hello123 from "./commonents/hello";
import Message from "./commonents/Message";
import Counter from "./commonents/Counter";
import Function from "./commonents/Function";
import HooksF from "./commonents/HooksF";
import Form from "./commonents/Form";

function App() {
  return (
    <div className="App">
      <Form></Form>
      {/* <HooksF /> */}
      {/* <Function /> */}

      {/* <div>working on the Different things</div>
      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <Greet Name="Siraj" College="IBA">
        <p>This is Computer Science Student</p>
      </Greet>

      <Greet Name="bcd">
        <button>Kill me </button>
      </Greet> */}

      {/* <Greet Name="abc">
        <button>Action </button>
      </Greet>

      <Greet Name="bcd">
        <button>Kill me </button>
      </Greet>

      <p>this is Welcome Starting from here</p>

      <Welcome Name="Siraj" />
      <Welcome Name="dcs" />
      <Welcome Name="daa" />

      <Hello123 /> */}
    </div>
  );
}

export default App;
