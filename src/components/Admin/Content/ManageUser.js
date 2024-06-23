import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import instance from "../../../utils/axiosCustomize";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    const handleClickBtnUpdate = (user) => {
        setDataUpdate(user)
    }

    const resetData = () => {
        setDataUpdate({})
    }
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-backdrop="static"
                        data-bs-target="#staticBackdropCreate"
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser 
                    listUsers={listUsers} 
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser fetchListUsers={fetchListUsers} />
                <ModalUpdateUser 
                fetchListUsers={fetchListUsers}
                handleClickBtnUpdate={handleClickBtnUpdate}
                dataUpdate={dataUpdate}
                resetData={resetData}
                />
            </div>
        </div>
    );
};

export default ManageUser;
