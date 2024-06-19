import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import instance from "../../../utils/axiosCustomize";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {

    const [listUsers, setListUsers] = useState([]);
    // componentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-backdrop="static"
                        data-bs-target="#staticBackdrop"
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser fetchListUsers={fetchListUsers} />
            </div>
        </div>
    );
};

export default ManageUser;
