import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";

function Home() {
    const [blog, change] = useState({});
    useEffect(() => { api.recentBlog().then(res => { if (res) change(res.data) }); }, []);
    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <p>home</p>
                    <div className="recentBlog">
                        <img src={blog.image} alt="recentBlogImage" className="recentBlogImage" />
                        <p>{blog.title}</p>
                        <Link to={`/blog/${blog._id}`}>
                            <div className="readMore">read more</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;