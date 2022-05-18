import React from "react";
import ReactDOM from "react-dom/client";
// import "./Button.css";
// import "./AppButton4_1.css";
// import "./AppCard4_2.css";
import "../../AppButton4_1.css";

export default class AppButton6_1_4_1_refractored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textWeight: this.props.textWeight,
      buttonText: this.props.buttonText,
    };
  }
  render() {
    return (
      <>
        <Refractored_4_1 buttonText="important" textWeight="bold" />
        <Refractored_4_1 buttonText="not important" textWeight="normal" />
      </>
    );
  }
}

class Refractored_4_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textWeight: this.props.textWeight,
      buttonText: this.props.buttonText,
    };
  }
  render() {
    return (
      <span>
        <button className={this.state.textWeight}>
          {this.state.buttonText}
        </button>
      </span>
    );
  }
}
