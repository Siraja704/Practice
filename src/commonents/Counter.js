import react, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  increament() {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <div>count = {this.state.count}</div>
        <button onClick={() => this.increament()}>Increament</button>
        <button onClick={() => this.increamentFive()}>
          {" "}
          increament of Five
        </button>

        <button onClick={() => this.reset()}>Reset button</button>
      </div>
    );
  }
}

export default Counter;
