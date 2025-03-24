import react, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increament() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
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
      counter: 0,
    });
  }

  render() {
    return (
      <div>
        <div>Counter Machine</div>
        <div>Count - {this.state.counter}</div>
        <button onClick={() => this.increament()}>Increament by 1</button>
        <button onClick={() => this.increamentFive()}>Increament by 5</button>
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default Counter;

// import react, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   increament() {
//     // this.setState({
//     //   count: this.state.count + 1,
//     // });

//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   increamentFive() {
//     this.increament();
//     this.increament();
//     this.increament();
//     this.increament();
//     this.increament();
//   }
//   reset() {
//     this.setState({
//       count: 0,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div>count = {this.state.count}</div>
//         <button onClick={() => this.increament()}>Increament</button>
//         <button onClick={() => this.increamentFive()}>
//           {" "}
//           increament of Five
//         </button>

//         <button onClick={() => this.reset()}>Reset button</button>
//       </div>
//     );
//   }
// }

// export default Counter;
