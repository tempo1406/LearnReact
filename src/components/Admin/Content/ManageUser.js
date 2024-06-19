import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import instance from "../../../utils/axiosCustomize";
import TableUser from "./TableUser";

const ManageUser = () => {
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
                    <FcPlus/> Add new users</button>
                </div>
                <div className="table-user-container">
                    <TableUser/>
                </div>
                <ModalCreateUser />
            </div>
          
        </div>
    );
};


export default ManageUser;
