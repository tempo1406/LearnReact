import React from "react";

class UserInfor extends React.Component {
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
    
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };
    
    handleOnSubmit = (event) => {
        event.preventDefault(); // tránh reload lại trang
        console.log(this.state);
    };
      
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
  }
}

export default UserInfor;
