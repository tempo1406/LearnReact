import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {
  
  state = {
    listUsers: [
      {id: 1, name:"Ngoc Toan", age:"20"},
      {id: 2, name:"Ngoc Minh", age:"22"},
      {id: 3, name:"Cua", age:"23"}
    ]
  }

  render() {
    return (
      <div>
        <UserInfor />
        <br/> <br/> 
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponents;
