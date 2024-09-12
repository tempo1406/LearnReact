import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid Email");
            return;
        }
        if (!password) {
            toast.error("Invalid Password");
            return;
        }

        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login");
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <div className="register-container">
            <div className="header">
                <span>Are you have an account?</span>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
            <div className="title col-4 mx-auto">NgocToan</div>
            <div className="welcome col-4 mx-auto">
                Get better data with conversational forms, surveys, quizzes &
                more.
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group pass-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type={isShowPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    { isShowPassword ? 
                        <span className="icons-eye"
                            onClick={() => setIsShowPassword(false)}>
                            <VscEye/>
                        </span>
                        :
                        <span className="icons-eye"
                            onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed/>
                        </span>
                    }
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input
                        className="form-control"
                        type={"text"}
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >
                        Create my account
                    </button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => navigate("/")}>
                        &#60;&#60;Go to HomePage
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;
