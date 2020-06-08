import React from "react";
import "./style.css";
import api from "../../utils/api";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: null
        }
    }

    componentDidMount = () => api.findBlog("5ed6749f8efd8459d3cb82f5").then(res => this.setState({ about: res.data.content }));

    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        <div dangerouslySetInnerHTML={{ __html: this.state.about }} />
                    </div>
                </div>
            </>
        )
    }
}

export default About;