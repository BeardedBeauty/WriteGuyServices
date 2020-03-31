import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper green z-depth-5">
                <div className="container">
                    <a href="#" class="brand-logo">Write Guy</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="login.html" >Login</a></li>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">clear_all</i></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;