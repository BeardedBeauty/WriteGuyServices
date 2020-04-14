import axios from "axios";

export default {
    getImages: function () {
        return axios.get("/api/images").catch(err => console.log(err));
    },
    getImageQuery: function (get) {
        return axios.get("/api/images/" + get).catch(err => console.log(err));
    },
    postImages: function (post) {
        console.log(post);
        return axios.post("/api/images", post).catch(err => console.log(err));
    },
    deleteImages: function (input) {
        return axios.delete("/api/images/" + input).catch(err => console.log(err));
    }
};