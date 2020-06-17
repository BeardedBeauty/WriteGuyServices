import React from "react";
import "./style.css";
import logo from "../../assets/wgs.png";
// import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer class="page-footer teal darken-4">
                <div class="container">
                    <div class="row">
                        <img src={logo} alt="Writeguyservices" className="logo" />
                        <div class="col s12 m8 l8">
                            <h5 class="white-text">Task Master Team</h5>
                            <ul>
                                <li><a class="white-text" href="">Peter</a></li>
                                <li><a class="white-text" href="">Ryan 2</a></li>
                                <li><a class="white-text" href="">John</a></li>
                                <li><a class="white-text" href="">Jake</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <a class="brown-text text-lighten-3" href="http://materializecss.com">© 2020 Oakware Web Services</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;