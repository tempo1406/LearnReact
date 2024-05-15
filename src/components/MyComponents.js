import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Toan",
    address: "Quang Binh",
    age: 19,
  };

  handleClick(event) {
    console.log("click button");
    console.log("My name is ", this.state.name);
  }

  handleOnMoverOver(event) {
    console.log(event);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponents;
