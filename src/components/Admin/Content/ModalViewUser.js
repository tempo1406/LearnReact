import { useEffect, useState } from "react";
import _ from "lodash";

const ModalUpdateUser = (props) => {
    const { dataUpdate } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            // Update State
            setEmail(dataUpdate.email);
            setUserName(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage("");
            if (dataUpdate.image) {
                setPreviewImage(`data:image/png;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate]);


    useEffect(() => {
        const myModalEl = document.getElementById("staticBackdropView");
        const handleHidden = () => {
            setEmail("");
            setPassword("");
            setUserName("");
            setRole("USER");
            setImage("");
            setPreviewImage("");
            props.resetData();
        };

        myModalEl.addEventListener("hidden.bs.modal", handleHidden);

        return () => {
            myModalEl.removeEventListener("hidden.bs.modal", handleHidden);
        };
    }, []);



    return (
        <div>
            <div
                className="modal fade modal-xl modal-add-user"
                id="staticBackdropView"
                data-bs-backdrop="static myModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                View a user
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="staticBackdropViewLabel"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        disabled={true}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        disabled={true}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        disabled={true}
                                        onChange={(event) =>
                                            setUserName(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Role</label>
                                    <select
                                        className="form-select"
                                        value={role}
                                        disabled={true}
                                        onChange={(event) =>
                                            setRole(event.target.value)
                                        }
                                    >
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label
                                        className="form-lable"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"            
                                        hidden
                                    ></input>
                                </div>

                                <div className="col-md-12 img-preview">
                                    {previewImage ? (
                                        <img src={previewImage}></img>
                                    ) : (
                                        <span>Preview Image</span>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUpdateUser;
