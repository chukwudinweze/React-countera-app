import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    let count = localStorage.getItem("count");
    count = parseInt(count, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  handleAddOne() {
    this.setState(prev => {
      return {
        count: prev.count + 1
      };
    });
  }

  handleRemoveOne() {
    this.setState(prev => {
      return {
        count: prev.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: (this.count = 0)
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
