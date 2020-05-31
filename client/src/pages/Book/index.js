import React from "react";
import api from "../../utils/api";
import { Redirect } from "react-router-dom";
import moment from "moment-timezone";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: props.user.name, email: props.user.email },
            timeZone: moment.tz.guess()
        }
    }

    componentDidMount = () => console.log(this.state.timeZone);

    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal" >
                        <p>{"Hello, " + this.props.user.name}</p>
                        <div className="block">
                            <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" >select dates</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Book;