import axios from "../utils/axiosCustomize";

const postCreatNewUser = ( email, password, username, role, image) => {
    //call apis
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
    return axios.get("api/v1/participant/all");
}

const putUpdateUsers = ( id, username, role, image) => {
    //call apis
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put("api/v1/participant", data);
};

export { getAllUsers,postCreatNewUser, putUpdateUsers }