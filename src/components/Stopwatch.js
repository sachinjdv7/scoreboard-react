import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapseTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapseTime: prevState.elapseTime + (now - this.state.previousTime),
      }));
    }
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({
      elapseTime: 0,
    });
  };

  render() {
    const seconds = Math.floor(this.state.elapseTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "stop" : "start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
