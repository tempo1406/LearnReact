import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'
// class DisplayInfor extends React.Component {
//     render() {
//         //destructuring array/object
//         const {listUsers} =  this.props
//         return (
//             <div className="display-infor-container">
//                 {true && 
//                     <>
//                     { listUsers.map((user) => {
//                         return (
//                             <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                 <div>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age {user.age}</div>  
//                                 </div>
//                                 <div>
//                                     <button onClick={() => this.props.hanleDeleteUser(user.id)}>Delete</button>
//                                 </div>
//                                 <hr />
//                             </div>
//                         ) 
//                     })}
//                     </> 
//                 }           
//             </div>
//         ) 
//     }
// }

const DisplayInfor = (props) => {
    const {listUsers} = props // object

    const[isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? 'Hide List User' : 'Show List User'}
                    </span>
                </div>
                {isShowHideListUser && 
                    <>
                    { listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age {user.age}</div>  
                                </div>
                                <div>
                                    <button onClick={() => props.hanleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        ) 
                    })}
                    </> 
                }           
            </div>
        ) 
}


export default DisplayInfor