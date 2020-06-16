import React from "react";
import moment from "moment-timezone";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: props.user.name, email: props.user.email },
            timeZone: moment.tz.guess()
        }
    }

    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal" >
                        <p>{"Hello, " + this.props.user.name}</p>
                        <div className="block">
                            <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" >purchase 8 sessions</button>
                            <br /><br />
                            {/* <a href=""><button id="" className="btn blue waves-effect waves-green" type="submit" name="action" >book 30 min breakout session</button></a> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Book;