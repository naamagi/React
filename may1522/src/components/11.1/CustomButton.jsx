import React from "react";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "pink" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "gold" }), 1000);
  }

  render() {
    return (
      <div>
        <button className={props.textWeight}>{props.buttonText}</button>
        <button className={props.textWeight}>{props.buttonText}</button>
        <button className={props.textWeight}>{props.buttonText}</button>
      </div>
    );
  }
}

export default CustomButton;
