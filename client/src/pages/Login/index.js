import React from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import api from "../../utils/api";
import moment from "moment-timezone";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginemail: "",
            loginpass: "",
            registername: "",
            registeremail: "",
            registerpass: "",
            registerpassconfirm: "",
            invalid: "",
            redirect: false,
            loading: true,
            DTdrawer: ["login loginOpenDT z-depth-3", "register registerClosedDT"],
            drawerState: true
        }
    }

    componentDidMount = () => this.auth();

    setLoginEmail = wf => this.setState({ loginemail: wf.target.value });
    setLoginPass = wg => this.setState({ loginpass: wg.target.value });

    registerName = wh => this.setState({ registername: wh.target.value });
    registerEmail = wj => this.setState({ registeremail: wj.target.value });
    registerPassword = wk => {
        wk[1]
            ? this.setState({ registerpass: wk[0].target.value })
            : this.setState({ registerpassconfirm: wk[0].target.value });
    }

    loginSubmit = s => {
        s.preventDefault();
        api.getUser({ email: this.state.loginemail, password: this.state.loginpass }).then(res => {
            if (res) {
                this.setState({ redirect: true });
                window.location.reload(false);
            }
            // window.location.reload(false);
        });
    }

    registerSubmit = qu => {
        qu.preventDefault();
        // uncomment these lines for testing purposes
        // api.newUser({
        //     name: j,
        //     email: l,
        //     password: qr,
        //     zone: moment.tz.guess()
        // });
        let j = this.state.registername;
        let l = this.state.registeremail;
        let qr = this.state.registerpass;
        let x = this.state.registerpassconfirm;
        if (this.state.registerpass.length < 8 || this.state.registerpassconfirm.length < 8) this.setState({ invalid: "invalid" });
        else if (this.state.registerpass !== this.state.registerpassconfirm) this.setState({ invalid: "invalid" });
        else {
            this.setState({ invalid: "valid" });
            if (j !== "" && l !== "" && qr !== "" && x === qr) {
                api.newUser({
                    name: j,
                    email: l,
                    password: qr,
                    zone: moment.tz.guess()
                });
            }
        }
    }

    auth = async () => api.authUser().then(res => {
        if (res) {
            this.setState({ loading: false, redirect: true });
        }
        else {
            const error = new Error(res.error);
            throw error;
        }
    }).catch(err => {
        console.error(err);
        this.setState({ loading: false });
    });

    DTdrawers = wl => !wl ? this.setState({
        DTdrawer: ["loginClosedDT", "registerOpenDT z-depth-3"],
        drawerState: false
    }) : this.setState({
        DTdrawer: ["loginOpenDT z-depth-3", "registerClosedDT"],
        drawerState: true
    });

    render() {
        if (this.state.loading) {
            return null;
        }
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        if (!this.state.redirent && !this.state.loading) return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        <div className="logBlock">
                            <div className={`login ${this.state.DTdrawer[0]}`} onClick={this.DTdrawers.bind(this, true)}>
                                <h3>Log in</h3>
                                <br /><br /><br />
                                <form>
                                    <label htmlFor="email_inline">Email</label>
                                    <input id="email_inline" type="email" className="validate" onChange={y => this.setLoginEmail(y)} />
                                    <span className="helper-text" data-error="Please enter a valid email" data-success="right"></span>
                                    <br />
                                    <label htmlFor="passw1">password</label>
                                    <input type="password" id="passw1" name="passw1" onChange={a => this.setLoginPass(a)} />
                                    <br /><br /><br /><br />
                                    <button className="btn block green waves-effect waves-yellow" type="submit" name="action" onClick={d => {
                                        this.loginSubmit(d);
                                    }}>Log in</button>
                                </form>
                            </div>
                            <div className={`register ${this.state.DTdrawer[1]}`} onClick={this.DTdrawers.bind(this, false)}>
                                <h3>r</h3>
                                <form encType="multipart/form-data">
                                    <label htmlFor="name">full name</label>
                                    <input type="text" id="name" name="name" onChange={v => this.registerName(v)} />
                                    <label htmlFor="email_inline2">Email</label>
                                    <input id="email_inline2" type="email" className="validate" onChange={b => this.registerEmail(b)} />
                                    <span className="helper-text" data-error="Please enter a valid email" data-success="Email valid"></span>
                                    <br />
                                    <label htmlFor="passw2">password</label>
                                    <input type="password" id="passw2" name="passw2" className={this.state.invalid} onChange={n => this.registerPassword([n, false])} />
                                    <label htmlFor="passwconfirm2">confirm password</label>
                                    <input type="password" id="passwconfirm2" name="passwconfirm2" className={this.state.invalid} onChange={m => this.registerPassword([m, true])} />
                                    <span className="helper-text" data-error="Passwords must match and minimum 8 characters in length" data-success=""></span>
                                    <br /><br />
                                    <button className={"btn block green waves-effect waves-light"} type="submit" name="action" onClick={qy => {
                                        this.registerSubmit(qy);
                                    }}>Submit<i className="material-icons right">send</i></button>
                                </form>
                            </div>
                        </div>
                        {/* <div id="signinDrawer" className={this.state.drawer[0] + "0 drawer"} onClick={openDrawer.bind(this, 0)}>
                            <h4 className="logTitle">Register</h4>
                            <form encType="multipart/form-data">
                                <label htmlFor="name">full name</label>
                                <input type="text" id="name" name="name" onChange={v => registerName(v)} />
                                <label htmlFor="email_inline3">Email</label>
                                <input id="email_inline3" type="email" className="validate" onChange={b => registerEmail(b)} />
                                <span className="helper-text" data-error="Please enter a valid email" data-success="Email valid"></span>
                                <br />
                                <label htmlFor="passw4">password</label>
                                <input type="password" id="passw4" name="passw4" className={"validate " + this.state.invalid} onChange={n => registerPassword([n, false])} />
                                <label htmlFor="passwconfirm">confirm password</label>
                                <input type="password" id="passwconfirm" name="passwconfirm" className={"validate " + this.state.invalid} onChange={m => registerPassword([m, true])} />
                                <button className="btn block green waves-effect waves-light" type="submit" name="action" >
                                    Submit<i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                        <div id="loginDrawer" className={this.state.drawer[1] + "1 drawer"} onClick={openDrawer.bind(this, 1)}>
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
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Login;   