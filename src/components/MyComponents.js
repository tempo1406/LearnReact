import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Toan",
    address: "Quang Binh",
    age: 19,
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponents;
