import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counterNumber: 0 };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return { counterNumber: prevState.counterNumber+1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <label>{this.state.counterNumber}</label>
      </div>
    );
  }
}
