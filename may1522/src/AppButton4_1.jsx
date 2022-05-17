import React from "react";
import ReactDOM from "react-dom/client";
// import "./Button.css";
import "./AppButton4_1.css";
import Button from "./components/Buttons-4.1/Button";

const AppButton4_1 = () => {
  return (
    <>
      <Button buttonText="important" textWeight="bold"/>
      <Button buttonText="not important" textWeight="normal"/>
    </>
  );
};

export default AppButton4_1;
