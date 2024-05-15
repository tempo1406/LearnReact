import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Toan",
    address: "Quang Binh",
    age: 19,
  };

  handleClick(event) {
    console.log("click button");

    this.setState({
      name: "Cua",
      age: Math.floor(Math.random() * 100) + 1,
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100) + 1,
    // });
  }

  handleOnMoverOver(event) {
    // console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me
        </button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponents;
