import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: false, email: false }
        }
    }
    render() {

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