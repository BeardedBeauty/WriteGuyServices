import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: props.user.name, email: props.user.email }
        }
    }
    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal" >
                        <p>{this.props.user.name + ", " + this.props.user.email}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Book;