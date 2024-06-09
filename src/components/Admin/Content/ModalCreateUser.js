import { Modal } from "bootstrap";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = ()  => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [role, setRole] = useState("USER")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")


    const handleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("");
        }
        
    }
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Launch demo modal
            </button>

            <div
                className="modal fade modal-xl modal-add-user"
                id="staticBackdrop"
                data-bs-backdrop="static"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="staticBackdropLabel"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}   
                                        onChange={(event) => setEmail(event.target.value)}                                    
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label                                       
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control" 
                                        value={password}  
                                        onChange={(event) => setPassword(event.target.value)}                                     
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
                                        onChange={(event) => setUserName(event.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">
                                        Role
                                    </label>
                                    <select className="form-select" onChange={(event) => setRole(event.target.value)}>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-lable lable-upload" htmlFor="lableUpload">
                                       <FcPlus/> UpLoad File Image
                                    </label>
                                    <input type="file" id="lableUpload" hidden onChange={(event) => handleUpLoadImage(event)}></input>
                                </div>

                                <div className="col-md-12 img-preview"> 
                                    { previewImage ? 
                                        <img src={previewImage}></img>
                                    : 
                                    <span>Preview Image</span>
                                    }                                   
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
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateUser;