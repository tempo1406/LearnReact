import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'

const TableUser = (props) => {
    const { listUsers } = props

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-index-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary" 
                                        data-bs-toggle="modal"
                                        data-bs-backdrop="static"
                                        data-bs-target="#staticBackdropView"
                                        onClick={() => props.handleClickBtnUpdate(item)}
                                        >View</button>
                                        <button className="btn btn-warning mx-3" 
                                        data-bs-toggle="modal"
                                        data-bs-backdrop="static"
                                        data-bs-target="#staticBackdropUpdate"
                                        onClick={() => props.handleClickBtnUpdate(item)}
                                        >Update</button>
                                        <button className="btn btn-danger"
                                        onClick={() => props.handleClickBtnDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    {listUsers &&
                        listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>
                                Not found data
                            </td>
                        </tr>}
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
