import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper teal darken-4 z-depth-5">
                <div className="container">
                    <Link to="/" class="brand-logo">Write Guy</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">clear_all</i></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;