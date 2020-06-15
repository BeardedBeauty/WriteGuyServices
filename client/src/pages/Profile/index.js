import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";
import "./style.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            change: false,
            currentPass: "",
            newPass: "",
            confirmPass: "",
            redirect: false
        }
    }

    passwordChange = () => this.state.change ? this.setState({ change: false }) : this.setState({ change: true });

    updatePassword = wk => wk[1] ? this.setState({ confirmPass: wk[0].target.value }) : this.setState({ newPass: wk[0].target.value });

    currentPassword = wl => this.setState({ currentPass: wl.target.value });

    updateSubmit = () => {
        console.log(this.state)
        if (this.state.newPass === this.state.confirmPass) {
            api.updatePassword({
                email: this.props.user.email,
                current: this.state.currentPass,
                new: this.state.newPass
            });
        }
    }

    logOut = () => api.logOut().then(() => {
        window.location.reload(false);
        this.setState({ redirect: true })
    });

    render() {
        if (this.state.redirect) return <Redirect to="/" />;
        else return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        <div className="userBlock z-depth-3">
                            <h4>{this.props.user.name}</h4>
                            <h6>{this.props.user.email}</h6>
                            <button id="" className="btn purple waves-effect waves-pink" type="submit" name="action" onClick={this.logOut}>logout</button>
                            <br /><br />
                            <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" onClick={this.passwordChange}>Change password</button>
                            <br /><br />
                            <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" href="mailto:casey@write-guyservices.net">contact casey ochs</button>
                            <br /><br />
                            <button id="" className="btn red waves-effect waves-yellow" type="submit" name="action" >delete account</button>
                            <br /><br />
                            {this.state.change && <>
                                <label htmlFor="current">Current password</label>
                                <input type="password" id="current" name="current" onChange={n => this.currentPassword(n)} />
                                <label htmlFor="passw2">New password</label>
                                <input type="password" id="passw2" name="passw2" onChange={m => this.updatePassword([m, false])} />
                                <label htmlFor="passwconfirm2">Confirm new password</label>
                                <input type="password" id="passwconfirm2" name="passwconfirm2" onChange={m => this.updatePassword([m, true])} />
                                <button id="" className="btn orange waves-effect waves-light" type="submit" name="action" onClick={this.updateSubmit}>confirm change</button>
                            </>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;