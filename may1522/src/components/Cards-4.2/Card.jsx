import React from "react";
// import faker from "faker";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.pic} alt="picture" />
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>{props.description}</div>
      <div>
        <a href={props.links[0]}>Share</a>
        <a href={props.links[1]}>Explore</a>
      </div>
    </div>
  );
};

export default Card;
