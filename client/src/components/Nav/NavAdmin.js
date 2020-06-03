import React from "react";
// import api from "../../utils/api";
import { Link } from "react-router-dom";
import "./style.css";

function NavAdmin() {
    return (
        <nav>
            <div className="nav-wrapper blue darken-4 z-depth-5">
                <div className="container">
                    <ul>
                        <li><Link to="/mod">Edit About</Link></li>
                        <li><Link to="/modblog">Blog Content</Link></li>
                        {/* <li><Link to="/blog">Registered Users</Link></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavAdmin;