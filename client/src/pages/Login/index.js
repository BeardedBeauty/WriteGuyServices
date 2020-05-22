import React, { useState } from "react";
import "./style.css";
import api from "../../utils/api";

function Login() {
    const [state, change] = useState({ drawer: ["closed", "z-depth-3 open"] });
    const [passwordInvalid, classInvalid] = useState("");
    const [r, t] = useState("");
    const [o, p] = useState("");
    const [j, k] = useState("");
    const [l, z] = useState("");
    const [qr, qt] = useState("");
    const [x, c] = useState("");

    const openDrawer = w => w ? change({ drawer: ["closed", "z-depth-3 open"] }) : change({ drawer: ["z-depth-3 open", "closed"] });
    const setLoginEmail = u => t(u.target.value);
    const setLoginPassword = i => p(i.target.value);
    const loginSubmit = s => {
        s.preventDefault();
        api.getUser({ email: r, password: o }).then(res => {
            res ? console.log(res.data.token) : console.log("extremely bad login");
        });
    }

    const registerName = qq => k(qq.target.value);
    const registerEmail = qw => z(qw.target.value);
    const registerPassword = qe => qe[1] ? qt(qe[0].target.value) : c(qe[0].target.value);
    const registerSubmit = qu => {
        qu.preventDefault();
        if (qt.length < 8 || c.length < 8) classInvalid("invalid");
        else if (x !== qr) classInvalid("invalid");
        else {
            classInvalid("valid");
            if (j !== "" && l !== "" && qr !== "" && x === qr) {
                api.newUser({
                    name: j,
                    email: l,
                    password: qr
                });
            }
        }
    }

    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <div className="logBlock z-depth-3">
                        <h3>Log in</h3>
                        <br /><br /><br />
                        <form>
                            <label htmlFor="email_inline">Email</label>
                            <input id="email_inline" type="email" className="validate" onChange={y => setLoginEmail(y)} />
                            <span className="helper-text" data-error="Please enter a valid email" data-success="right"></span>
                            <br />
                            <label htmlFor="passw1">password</label>
                            <input type="password" id="passw1" name="passw1" onChange={a => setLoginPassword(a)} />
                            <br /><br /><br /><br />
                            <button className="btn block green waves-effect waves-yellow" type="submit" name="action" onClick={d => {
                                loginSubmit(d);
                            }}>Log in</button>
                        </form>
                    </div>
                    <div className="logBlock z-depth-3">
                        <h3>Register</h3>
                        <form encType="multipart/form-data">
                            <label htmlFor="name">full name</label>
                            <input type="text" id="name" name="name" onChange={v => registerName(v)} />
                            <label htmlFor="email_inline2">Email</label>
                            <input id="email_inline2" type="email" className="validate" onChange={b => registerEmail(b)} />
                            <span className="helper-text" data-error="Please enter a valid email" data-success="Email valid"></span>
                            <br />
                            <label htmlFor="passw2">password</label>
                            <input type="password" id="passw2" name="passw2" className={passwordInvalid} onChange={n => registerPassword([n, 0])} />
                            <label htmlFor="passwconfirm2">confirm password</label>
                            <input type="password" id="passwconfirm2" name="passwconfirm2" className={passwordInvalid} onChange={m => registerPassword([m, 1])} />
                            <span className="helper-text" data-error="Passwords must match and minimum 8 characters in length" data-success=""></span>
                            <br /><br />
                            <button className={"btn block green waves-effect waves-light"} type="submit" name="action" onClick={qy => {
                                registerSubmit(qy);
                            }}>Submit<i className="material-icons right">send</i></button>
                        </form>
                    </div>
                    <div id="signinDrawer" className={state.drawer[0] + "0 drawer"} onClick={openDrawer.bind(this, 0)}>
                        <h4 className="logTitle">Register</h4>
                        <form encType="multipart/form-data">
                            <label htmlFor="name">full name</label>
                            <input type="text" id="name" name="name" onChange={v => registerName(v)} />
                            <label htmlFor="email_inline3">Email</label>
                            <input id="email_inline3" type="email" className="validate" onChange={b => registerEmail(b)} />
                            <span className="helper-text" data-error="Please enter a valid email" data-success="Email valid"></span>
                            <br />
                            <label htmlFor="passw4">password</label>
                            <input type="password" id="passw4" name="passw4" className={"validate " + passwordInvalid} onChange={n => registerPassword([n, 0])} />
                            <label htmlFor="passwconfirm">confirm password</label>
                            <input type="password" id="passwconfirm" name="passwconfirm" className={"validate " + passwordInvalid} onChange={m => registerPassword([m, 1])} />
                            <button className="btn block green waves-effect waves-light" type="submit" name="action" >
                                Submit<i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div id="loginDrawer" className={state.drawer[1] + "1 drawer"} onClick={openDrawer.bind(this, 1)}>
                        <h4 className="logTitle">Log in</h4>
                        <form>
                            <label htmlFor="email_inline4">Email</label>
                            <input id="email_inline4" type="email" className="validate" onChange={f => setLoginEmail(f)} />
                            <span className="helper-text" data-error="Please enter a valid email" data-success="Email valid"></span>
                            <br />
                            <label htmlFor="passw6">password</label>
                            <input type="password" id="passw6" name="passw6" onChange={g => setLoginPassword(g)} />
                            <button className="btn block green waves-effect waves-yellow" type="submit" name="action" onClick={h => {
                                loginSubmit(h);
                            }}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;