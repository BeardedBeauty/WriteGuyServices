import React from "react";
import api from "../../utils/api";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: { name: props.user.name, email: props.user.email },
        }
    }

    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal" >
                        <p>BLOG</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Blog;