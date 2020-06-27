import React from "react";
import "./style.css";
import logo from "../../assets/wgs.png";

function Footer() {
    return (
        <>
            <footer class="page-footer teal darken-4">
                <div class="container">
                    <div class="row center">
                        <img src={logo} alt="Writeguyservices" className="logo" />
                    </div>
                    <div className="row center">
                        <div class="col s12">
                            <h5 class="">Connect</h5>
                            <ul>
                                <li><a href="mailto:casey@write-guyservices.net">Email</a></li>
                                <li><a className="" href="https://www.linkedin.com/in/casey-richard-ochs-write-guyservices/">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container center">
                        <p>© 2020 Write Guy Services</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;