import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import { postCreatNewUser } from '../../../services/apiService'

const ModalCreateUser = (props) => {
    // const { data-bs-toggle } = props;

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            // setPreviewImage("");
        }
    };
    

    useEffect(() => {
        const myModalEl = document.getElementById("staticBackdropCreate");
        const handleHidden = () => {
            setEmail("");
            setPassword("");
            setUserName("");
            setRole("USER");
            setImage("");
            setPreviewImage("");
        };

        myModalEl.addEventListener("hidden.bs.modal", handleHidden);

        return () => {
            myModalEl.removeEventListener("hidden.bs.modal", handleHidden);
        };
    }, []);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleSubmitCreatUser = async () => {
        //validate
        const isValidEmail = validateEmail(email)
        if(!isValidEmail) {
            toast.error("Invalid Email")
            return
        }
        if(!password) {
            toast.error("Invalid Password")
            return
        }


        let data = await postCreatNewUser(email, password, username, role, image)
        // succes = close modal *
        console.log("res: ", data);
        if(data && data.EC === 0) {
            toast.success(data.EM)
            props.setCurrentPage(1)
            await props.fetchListUsersWithPaginate(1)
            // await props.fetchListUsers();
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    };

    return (
        <div>
            {/* <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropCreate"
            >
                Launch demo modal
            </button> */}

            <div
                className="modal fade modal-xl modal-add-user"
                id="staticBackdropCreate"
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
                                Add a user
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="staticBackdropCreateLabel"
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
                                        onChange={(event) =>
                                            setUserName(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Role</label>
                                    <select
                                        className="form-select"
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
                                        className="form-lable lable-upload"
                                        htmlFor="lableUpload"
                                    >
                                        <FcPlus /> UpLoad File Image
                                    </label>
                                    <input
                                        type="file"
                                        id="lableUpload"
                                        hidden
                                        onChange={(event) =>
                                            handleUpLoadImage(event)
                                        }
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
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => handleSubmitCreatUser()}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCreateUser;
