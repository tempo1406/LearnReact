import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

const DisplayInfor = (props) => {
    const {listUsers} = props // object

    const[isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }



    useEffect(
        () => {
        setTimeout(() => {
            if(listUsers.length === 0) {
                alert('ddd')
            }
            document.title = 'Nguyen Ngoc Toan'
        }, 3000)
        console.log('call me useEffect')
        },[listUsers] // [] Chay 1 lan = componentDidMount
    )

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