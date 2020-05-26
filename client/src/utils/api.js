import axios from "axios";

export default {
    getUser: function (put) {
        return axios.put("/api/users/", put).catch(err => console.log(err));
    },
    newUser: function (post) {
        return axios.post("/api/users/", post).catch(err => console.log(err));
    },
    deleteUser: function (user) {
        return axios.delete("/api/users/:" + user).catch(err => console.log(err));
    }
};