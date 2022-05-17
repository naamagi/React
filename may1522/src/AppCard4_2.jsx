import React from "react";
import ReactDOM from "react-dom/client";
import "./AppCard4_2.css";
import Card from "./components/Cards-4.2/Card";
import Button from "./components/Buttons-4.1/Button";
// import faker from "faker";

const AppCard4_2 = () => {
  return (
    <div className="cards">
      <Card 
        buttonText="button text 1"
        textWeight="normal"
        title="title 1"
        description="description 1"
        pic="https://picsum.photos/300/200?random=1"
        links={['https://developer.mozilla.org', 'https://www.udemy.com']}
      />
      <Card
        buttonText="button text 2"
        textWeight="normal"
        title="title 2"
        description="description 2"
        pic="https://picsum.photos/300/200?random=2"
        links={['https://www.tesla.com', 'https://www.google.com']}


      />
      <Card 
        buttonText="button text 3"
        textWeight="normal"
        title="title 3"
        description="description 3"
        pic="https://picsum.photos/300/200?random=3"
        links={['https://mdl.appleseeds.org.il', 'https://www.facebook.com']}

      />
    </div>
  );
};

export default AppCard4_2;
