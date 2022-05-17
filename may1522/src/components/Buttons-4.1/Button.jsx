import React from "react";

const Button = (props) => {
  return (
    <span>
      <button className={props.textWeight}>{props.buttonText}</button>
    </span>
  );
};

export default Button;
