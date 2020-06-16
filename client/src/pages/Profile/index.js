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
            redirect: false,
            delete: false,
            tryAgain: false,
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

    deleteForm = () => this.state.delete ? this.setState({ delete: false }) : this.setState({ delete: true });

    deleteUser = wx => {
        wx.preventDefault();
        api.manualAuth({
            email: this.props.user.email,
            password: this.state.currentPass
        }).then(res => {
            if (res.data) {
                if (window.confirm(`Are you sure you want to delete your account, ${this.props.user.name}?`)) {
                    api.deleteUser({
                        email: this.props.user.email,
                        password: this.state.currentPass
                    }).then(res => {
                        if (res) {
                            window.location.reload(false);
                            this.setState({ redirect: true });
                        }
                        else { this.setState({ tryAgain: true }) }
                    });
                }
            }
            else { this.setState({ tryAgain: true }); }
        });
    }

    render() {
        if (this.state.redirect) return <Redirect to="/" />;
        else return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        {this.state.tryAgain && <div className="tryAgain">Sorry, your password was incorrect. Please try agian</div>}
                        <div className="userBlock z-depth-3">
                            <h4>{this.props.user.name}</h4>
                            <h6>{this.props.user.email}</h6>
                            <button id="" className="btn purple waves-effect waves-pink" type="submit" name="action" onClick={this.logOut}>logout</button>
                            <br /><br />
                            <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" onClick={this.passwordChange}>Change password</button>
                            <br /><br />
                            <a href="mailto:casey@write-guyservices.net"><button id="" className="btn blue waves-effect waves-green" type="submit" name="action" >contact casey ochs</button></a>
                            <br /><br />
                            <button id="" className="btn red waves-effect waves-yellow" type="submit" name="action" onClick={this.deleteForm}>{!this.state.delete && "delete account"}{this.state.delete && "cancel delete"}</button>
                            <br /><br />
                            {this.state.change && !this.state.delete && <>
                                <label htmlFor="current">Current password</label>
                                <input type="password" id="current" name="current" onChange={n => this.currentPassword(n)} />
                                <label htmlFor="passw2">New password</label>
                                <input type="password" id="passw2" name="passw2" onChange={m => this.updatePassword([m, false])} />
                                <label htmlFor="passwconfirm2">Confirm new password</label>
                                <input type="password" id="passwconfirm2" name="passwconfirm2" onChange={m => this.updatePassword([m, true])} />
                                <button id="" className="btn orange waves-effect waves-light" type="submit" name="action" onClick={this.updateSubmit}>confirm change</button>
                            </>}
                            {this.state.delete &&
                                <form encType="multipart/form-data">
                                    <label htmlFor="current">Confirm password</label>
                                    <input type="password" id="current" name="current" onChange={n => this.currentPassword(n)} />
                                    <button id="" className="btn orange waves-effect waves-red" type="submit" name="action" onClick={wz => this.deleteUser(wz)}>continue delete</button>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;