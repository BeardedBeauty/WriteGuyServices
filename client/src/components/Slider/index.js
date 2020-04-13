import React from "react";
import "materialize-css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Slider() {
    return (
        <>
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><div className="divider"></div></li>
                {/* <li><a className="subheader">Subheader</a></li> */}
                <li><Link className="waves-effect" to="/">Home</Link></li>
                <li><Link className="waves-effect" to="/about">About</Link></li>
                <li><Link className="waves-effect" to="/login">Login</Link></li>
            </ul>
        </>
    )
};

export default Slider;