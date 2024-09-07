import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import instance from "../../../utils/axiosCustomize";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser"
import ModalDeleteUser from "./ModalDeleteUser"
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 6
    const [pageCount, setPageCount] = useState(0)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1)
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    };

    const handleClickBtnUpdate = (user) => {
        setDataUpdate(user)
    }

    const resetData = () => {
        setDataUpdate({})
    }

    const handleClickBtnDelete = (user) => {
        setDataDelete(user)
        setShowModalDeleteUser(true)
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
                    {/* <TableUser 
                    listUsers={listUsers} 
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                    listUsers={listUsers} 
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    pageCount={pageCount}
                    />
                </div>
                <ModalCreateUser fetchListUsers={fetchListUsers} />
                <ModalUpdateUser 
                fetchListUsers={fetchListUsers}
                handleClickBtnUpdate={handleClickBtnUpdate}
                dataUpdate={dataUpdate}
                resetData={resetData}
                />
                <ModalViewUser
                fetchListUsers={fetchListUsers}
                handleClickBtnUpdate={handleClickBtnUpdate}
                dataUpdate={dataUpdate}
                resetData={resetData}
                />
                <ModalDeleteUser
                fetchListUsers={fetchListUsers}
                dataDelete={dataDelete}
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                />
            </div>
        </div>
    );
};

export default ManageUser;
