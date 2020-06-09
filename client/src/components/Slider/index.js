import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import "materialize-css";
import M from "materialize-css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Slider() {
    const [user, change] = useState({ name: "Not logged in", email: "" });
    useEffect(() => { api.authUser().then(res => { if (res) change(res.data) }); }, []);
    return (
        <>
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        {/* <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a> */}
                        <h5>{user.name}</h5>
                        <h6>{user.email}</h6>
                    </div>
                </li>
                <li><div className="divider"></div></li>
                {/* <li><a className="subheader">Subheader</a></li> */}
                <li><Link to="/" className="waves-effect" >Home</Link></li>
                <li><Link className="waves-effect" to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link className="waves-effect" to="/login">Login</Link></li>
            </ul>
        </>
    )
};

export default Slider;