import axios from "axios";

export default {
    getUser: function (put) {
        return axios.put("/api/users/login", put).catch(err => console.log(err));
    },
    newUser: function (post) {
        console.log(post);
        return axios.post("/api/users", post).catch(err => console.log(err));
    },
    deleteUser: function (input) {
        return axios.delete("/api/users/" + input).catch(err => console.log(err));
    }
};