import axios from "axios";

export default {
    //------------------------------------------------------- Users:
    authUser: function () {
        return axios.get("api/users/").catch(err => console.log(err));
    },
    getUser: function (put) {
        return axios.put("/api/users/", put).catch(err => console.log(err));
    },
    newUser: function (post) {
        return axios.post("/api/users/", post).catch(err => console.log(err));
    },
    deleteUser: function (user) {
        return axios.put(`api/users/delete`, user).catch(err => console.log(err));
    },
    updatePassword: function (user) {
        return axios.put("/api/users/passwordUpdate", user).catch(err => console.log(err));
    },
    logOut: function () {
        return axios.get("api/users/logout").catch(err => console.log(err));
    },
    manualAuth: function (user) {
        return axios.put("api/users/authdelete", user).catch(err => console.log(err));
    },
    //------------------------------------------------------- Blogs:
    getBlogs: function () {
        return axios.get("api/blogs/").catch(err => console.log(err));
    },
    findBlog: function (id) {
        return axios.get(`/api/blogs/${id}`).catch(err => console.log(err));
    },
    createBlog: function (post) {
        return axios.post("/api/blogs/", post).catch(err => console.log(err));
    },
    modBlog: function (post) {
        return axios.put("/api/blogs/", post).catch(err => console.log(err));
    },
    deleteBlog: function (id) {
        return axios.delete(`api/blogs/${id}`).catch(err => console.log(err));
    }
};