import React from "react";
// 8.1
//  Life Cycle Methods

// 1.Create an initial state in a component with a key called
// “favoriteColor” and its value some color string.

// 2. In your JSX create an h1 element that will display your
// favorite color coming from state.
// e.g. “My favorite color is blue”

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "pink" };
  }
  // 4. Just when the component mounts to the screen call the
  // appropriate life cycle method that will create a setTimeout
  // function that will be invoked after 1 second.
  // Inside your setTimeout function change the state’s value of
  // your favoriteColor to some other color.

  componentDidMount() {
    setTimeout(
      () => this.setState({ favoriteColor: "gold" }),
      1000
    );
  }

  render() {
    return (
      <div className="color">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      
        {/* {document.querySelector('#emptyDiv').innerText=`The updated favorite color is ${this.state.favoriteColor}`} */}
      </div>
    );
  }
}
export default Color;
