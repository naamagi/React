import React from "react";
import ReactDOM from "react-dom/client";
import "../AppEx_7_2.css";
import Button from "./Buttons-4.1/Button";
import Box4 from "./Box4";
export default class BoxButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hidden,
      buttonText: this.props.buttonText,
      counterNumber: this.props.counterNumber,
    };

    const callOnClick = (e) => {
      if (this.state.hidden === true) {
        {Box4.setAttribute(display="none")};
      }
      else{        {Box4.removeAttribute(display="none")};
    }
    };
  }
  render() {
    return (
      <div>
        <div className="BoxButton" hidden="false">
          <Button
            onClick={() => {
              if (this.state.hidden == true) {
                this.setState({ hidden: false });
              } else {
                this.setState({ hidden: true });
              }
            }}
            className="Button"
            buttonText="show/hide"
            textWeight="normal"
          />
          <br />
          <Box4 className="Box4 " />
        </div>
      </div>
    );
  }
}
