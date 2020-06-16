import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";
import bless from "../../assets/papabless.JPG";

function Home() {
    const [blog, change] = useState({});
    useEffect(() => { api.recentBlog().then(res => { if (res) change(res.data) }); }, []);
    return (
        <>
            <div className="showverflow left">
                <img src={bless} alt="papabless" className="fillerimage" />
            </div>
            <div className="showverflow right">
                <img src={bless} alt="papabless" className="fillerimage" />
            </div>
            <div className="coverItPlease"></div>
            <div className="centaur absolute">
                <div className="intermodal">
                    <img src={bless} alt="papabless" className="papabless" />
                    <div className="recentBlog">
                        <img src={blog.image} alt="recentBlogImage" className="recentBlogImage" />
                        <Link to={`/blog/${blog._id}`}>
                            <div className="readMore">read</div>
                        </Link>
                        <div id="blogTitle">
                            <h5 id="title">{blog.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;