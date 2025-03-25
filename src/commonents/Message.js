import { Component } from "react";
import react from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: " Welcome Visitor",
    };
  }

  onchange() {
    this.setState({
      message: "Thank you for Subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onchange()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
