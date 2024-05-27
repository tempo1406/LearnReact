import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {
  
  state = {
    listUsers: [
      {id: 1, name:"Ngoc Toan", age:"18"},
      {id: 2, name:"Ngoc Minh", age:"22"},
      {id: 3, name:"Cua", age:"69"}
    ]
  }

  handleAddNewUser = (userObj) => {
    console.log(userObj)
    this.setState({
      listUsers:[userObj,...this.state.listUsers]
    })
  }

  hanleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers
    listUsersClone = listUsersClone.filter(item => item.id !== userId)
    this.setState({
      listUsers: listUsersClone
    })
  } 

  render() {
    return (
        <>
          <div className="a">
          <AddUserInfor 
            handleAddNewUser={this.handleAddNewUser}
          />
          <br/> <br/> 
          <DisplayInfor 
            listUsers={this.state.listUsers}
            hanleDeleteUser={this.hanleDeleteUser}
          />
          </div>
            <div className="b">

          </div>
        </>
        
      
    );
  }
}

export default MyComponents;
