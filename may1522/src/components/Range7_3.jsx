import React from "react";
import "../Range7_3.css";
export default class Range7_3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counterNumber: 0 };
  }
  handleClickIncrement = () => {
    this.setState((prevState) => {
      return {
        counterNumber:
          prevState.counterNumber < 10
            ? prevState.counterNumber + 1
            : prevState.counterNumber,
      };
    });
  };
  handleClickDecrement = () => {
    this.setState((prevState) => {
      //   if (counterNumber === prevState.counterNumber)
      return {
        counterNumber:
          prevState.counterNumber > -10 ? prevState.counterNumber - 1 : prevState.counterNumber,
      };
    });
  };
  drawBackground = () => {
    if (this.state.counterNumber > 0) {
      return <span className="green">{this.state.counterNumber}</span>;
    }
    if (this.state.counterNumber < 0) {
      return <span className="red">{this.state.counterNumber}</span>;
    }
    if (this.state.counterNumber === 0) {
      return <span className="black">{this.state.counterNumber}</span>;
    }
  };
  render() {
    //   const
    //   if(this.state.counterNumber>0)
    return (
      <div>
        <button className="incrementBtn" onClick={this.handleClickIncrement}>
          Increment
        </button>
        <button className="decrementBtn" onClick={this.handleClickDecrement}>
          Decrement
        </button>
        <label>{this.drawBackground()}</label>
      </div>
    );
  }
}
