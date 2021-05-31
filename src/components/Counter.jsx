import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>

        <button
          type="button"
          className="btn  btn-dark m-2"
          onClick={this.handleIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-dark m-2"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>

        <button
          type="button"
          className="btn btn-dark m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
}
