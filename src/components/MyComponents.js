import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {
  // JSX
  render() {
    const myInfor = ['ab', 'b', 'c']
    return (
      <div>
        <UserInfor />
        <br/> <br/> 
        <DisplayInfor name="Ngoc Toan" age="20"/>
        <hr/>
        <DisplayInfor name="Cua" age={25} myInfor={myInfor}/>
      </div>
    );
  }
}

export default MyComponents;
