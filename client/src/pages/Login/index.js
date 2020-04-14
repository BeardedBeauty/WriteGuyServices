import React, { useState } from "react";
import "./style.css";
import api from "../../utils/api";

function Login() {
    const [state, change] = useState({ drawer: ["closed", "z-depth-3 open"] });

    const openDrawer = w => w ? change({ drawer: ["closed", "z-depth-3 open"] }) : change({ drawer: ["z-depth-3 open", "closed"] });

    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <div className="logBlock z-depth-3">
                        <h3>Log in</h3>
                        <br /><br /><br />
                        <form>
                            <label for="fname">email</label>
                            <input type="text" id="fname" name="fname" />
                            <label for="passw1">password</label>
                            <input type="text" id="passw1" name="passw1" />
                            <br /><br /><br /><br />
                            <button class="btn block green waves-effect waves-yellow" type="submit" name="action">Log in</button>
                        </form>
                    </div>
                    <div className="logBlock z-depth-3">
                        <h3>Register</h3>
                        <form enctype="multipart/form-data">
                            <label for="name">name</label>
                            <input type="text" id="name" name="name" />
                            <label for="email2">email</label>
                            <input type="text" id="email2" name="email2" />
                            <label for="passw2">password</label>
                            <input type="text" id="passw2" name="passw2" />
                            <label for="passwconfirm2">confirm password</label>
                            <input type="text" id="passwconfirm2" name="passwconfirm2" />
                            <br /><br />
                            <button class="btn block green waves-effect waves-light" type="submit" name="action">
                                Submit<i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div id="signinDrawer" className={state.drawer[0] + "0 drawer"} onClick={openDrawer.bind(this, 0)}>
                        <h4 className="logTitle">Register</h4>
                        <form enctype="multipart/form-data">
                            <label for="name">name</label>
                            <input type="text" id="name" name="name" />
                            <label for="email2">email</label>
                            <input type="text" id="email2" name="email2" />
                            <label for="passw4">password</label>
                            <input type="text" id="passw4" name="passw4" />
                            <label for="passwconfirm">confirm password</label>
                            <input type="text" id="passwconfirm" name="passwconfirm" />
                            <button class="btn block green waves-effect waves-light" type="submit" name="action">
                                Submit<i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div id="loginDrawer" className={state.drawer[1] + "1 drawer"} onClick={openDrawer.bind(this, 1)}>
                        <h4 className="logTitle">Log in</h4>
                        <form>
                            <label for="fname">email</label>
                            <input type="text" id="fname" name="fname" />
                            <label for="passw6">password</label>
                            <input type="text" id="passw6" name="passw6" />
                            <button class="btn block green waves-effect waves-yellow" type="submit" name="action">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;