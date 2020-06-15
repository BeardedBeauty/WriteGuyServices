import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";

function Nav() {
    const [user, change] = useState({ name: false, email: false, admin: false });
    useEffect(() => { api.authUser().then(res => { if (res) change(res.data) }); }, []);
    return (
        <nav>
            <div className="nav-wrapper teal darken-4 z-depth-5">
                <div className="container">
                    <Link to="/" className="brand-logo">Write Guy</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li>
                            <Link to="/book">
                                <button id="book" className="btn green waves-effect waves-light" type="submit" name="action" >Book a Session</button>
                            </Link>
                        </li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        {!user.email && <li><Link to="/login">Login</Link></li>}
                        {user.name && <li><Link to="/profile">{user.name}</Link></li>}
                        {user.admin && <li><Link to="/mod">∆ EDIT</Link></li>}
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">clear_all</i></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;