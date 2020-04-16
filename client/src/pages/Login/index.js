import React, { useState } from "react";
import "./style.css";
import api from "../../utils/api";

function Login() {
    const [state, change] = useState({ drawer: ["closed", "z-depth-3 open"] });
    const [r, t] = useState("");
    const [o, p] = useState("");
    const [j, k] = useState("");
    const [l, z] = useState("");
    const [qr, qt] = useState("");
    const [x, c] = useState("");

    const openDrawer = w => w ? change({ drawer: ["closed", "z-depth-3 open"] }) : change({ drawer: ["z-depth-3 open", "closed"] });
    const setLoginEmail = u => t(u.target.value);
    const setLoginPassword = i => p(i.target.value);
    const blockLoginSubmit = s => {
        s.preventDefault();
        console.log(r + o);
    }

    const registerName = qq => k(qq.target.value);
    const registerEmail = qw => z(qw.target.value);
    const registerPassword = qe => qe[1] ? qt(qe[0].target.value) : c(qe[0].target.value);
    const registerSubmit = qu => {
        qu.preventDefault();
        console.log(j + l + qr + x);
        api.newUser({
            name: j,
            email: l,
            password: qr
        })
    }

    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <div className="logBlock z-depth-3">
                        <h3>Log in</h3>
                        <br /><br /><br />
                        <form>
                            <label htmlFor="fname">email</label>
                            <input type="text" id="fname" name="fname" onChange={y => setLoginEmail(y)} />
                            <label htmlFor="passw1">password</label>
                            <input type="text" id="passw1" name="passw1" onChange={a => setLoginPassword(a)} />
                            <br /><br /><br /><br />
                            <button className="btn block green waves-effect waves-yellow" type="submit" name="action" onClick={d => {
                                blockLoginSubmit(d);
                            }}>Log in</button>
                        </form>
                    </div>
                    <div className="logBlock z-depth-3">
                        <h3>Register</h3>
                        <form encType="multipart/form-data">
                            <label htmlFor="name">full name</label>
                            <input type="text" id="name" name="name" onChange={v => registerName(v)} />
                            <label htmlFor="email2">email</label>
                            <input type="text" id="email2" name="email2" onChange={b => registerEmail(b)} />
                            <label htmlFor="passw2">password</label>
                            <input type="text" id="passw2" name="passw2" onChange={n => registerPassword([n, 0])} />
                            <label htmlFor="passwconfirm2">confirm password</label>
                            <input type="text" id="passwconfirm2" name="passwconfirm2" onChange={m => registerPassword([m, 1])} />
                            <br /><br />
                            <button className="btn block green waves-effect waves-light" type="submit" name="action" onClick={qy => {
                                registerSubmit(qy);
                            }}>Submit<i className="material-icons right">send</i></button>
                        </form>
                    </div>
                    <div id="signinDrawer" className={state.drawer[0] + "0 drawer"} onClick={openDrawer.bind(this, 0)}>
                        <h4 className="logTitle">Register</h4>
                        <form encType="multipart/form-data">
                            <label htmlFor="name">full name</label>
                            <input type="text" id="name" name="name" />
                            <label htmlFor="email2">email</label>
                            <input type="text" id="email2" name="email2" />
                            <label htmlFor="passw4">password</label>
                            <input type="text" id="passw4" name="passw4" />
                            <label htmlFor="passwconfirm">confirm password</label>
                            <input type="text" id="passwconfirm" name="passwconfirm" />
                            <button className="btn block green waves-effect waves-light" type="submit" name="action" >
                                Submit<i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div id="loginDrawer" className={state.drawer[1] + "1 drawer"} onClick={openDrawer.bind(this, 1)}>
                        <h4 className="logTitle">Log in</h4>
                        <form>
                            <label htmlFor="fname">email</label>
                            <input type="text" id="fname" name="fname" onChange={f => setLoginEmail(f)} />
                            <label htmlFor="passw6">password</label>
                            <input type="text" id="passw6" name="passw6" onChange={g => setLoginPassword(g)} />
                            <button className="btn block green waves-effect waves-yellow" type="submit" name="action" onClick={h => {
                                blockLoginSubmit(h);
                            }}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;