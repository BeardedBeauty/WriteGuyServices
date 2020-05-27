import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";

class Book extends React.Component {
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
    }).catch(err => { console.error(err); });

    render() {
        if (this.state.loading) {
            return null;
        }
        if (this.state.redirect) {
            return <Redirect to="/login" />;
        }

        return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        <p>{this.state.user.name + ", " + this.state.user.email}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Book;