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
                    <div id="slogan"></div>
                    <p className="right">Helping Spanish speaking banking executives improve job performance with advanced English communication skills</p>
                    <div className="recentBlog">
                        <img src={blog.image} alt="recentBlogImage" className="recentBlogImage" />
                        <div className="blogTitle">
                            <h6 className="">Newest article:</h6>
                            <h5 className="title">{blog.title}</h5>
                            <p>{blog.created}</p>
                        </div>
                        <Link to={`/blog/${blog._id}`}>
                            <div className="readMore"><h6>Read</h6></div>
                        </Link>
                    </div>
                    <Link to={"/about"}>
                        <div id="bio">
                            <h4>I'm an ESL teacher specializing in the financial industry</h4>
                            <br />
                            <h5>find out more…</h5>
                        </div>
                    </Link>
                    <div id="videoBox">
                        <div className="green1">
                            <h5>Video: What to expect from my 30 minute strategy session</h5>
                        </div>
                        <div className="video">
                            <video controls="controls" width="360" name="welcome" src={mov}></video>
                        </div>
                    </div>
                </div>
            </div>
            <div id="filler"></div>
        </>
    )
}

export default Home;