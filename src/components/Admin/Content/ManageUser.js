import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import instance from "../../../utils/axiosCustomize";

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
                    Table users
                </div>
                <ModalCreateUser />
            </div>
          
        </div>
    );
};

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("interceptor", response)
    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? 
    error.response.data : Promise.reject(error);
  });

export default ManageUser;
