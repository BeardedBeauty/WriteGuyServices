import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";
import bless from "../../assets/papabless.JPG";
import mov from "../../assets/Welcome.mov";

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
                            <h6 id="title">Newest article:</h6>
                            <h5 id="title">{blog.title}</h5>
                            <p>{blog.created}</p>
                        </div>
                    </div>
                    <Link to={"/about"}>
                        <div id="bio">
                            <h4>im a enlish teacher with multiple years of expberience,</h4>
                            <br />
                            <h5>find out what i do…</h5>
                        </div>
                    </Link>
                    <div className="video">
                        <video controls="controls" width="480" name="welcome" src={mov}></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;