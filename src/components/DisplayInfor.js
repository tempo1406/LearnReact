import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const {listUsers} =  this.props
        return (
            <div>
                { listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age {user.age}</div>
                        </div>
                    )
                })}
                {/* <div> My name is {name}</div>
                <div> My name age is {age}</div>
                <hr></hr>
                <div> My name is {name}</div>
                <div> My name age is {age}</div>
                <hr></hr>
                <div> My name is {name}</div>
                <div> My name age is {age}</div> */}
            </div>
        ) 
    }
}

export default DisplayInfor