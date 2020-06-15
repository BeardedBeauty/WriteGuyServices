import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";

function Auth(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: { name: false, email: false },
                loading: true,
                redirect: false
            }
        }

        componentDidMount = () => api.authUser().then(res => {
            if (res) this.setState({ user: res.data, loading: false });
            else {
                const error = new Error(res.error);
                throw error;
            }
        }).catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
        });

        render() {
            if (this.state.loading) {
                return null;
            }
            if (this.state.redirect) {
                return <Redirect to="/" />;
            }

            return <Component {...this.props} user={this.state.user} />
        }
    }
}

export default Auth;