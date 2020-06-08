import React from "react";
import NavAdmin from "../../components/Nav/NavAdmin";
import CKEditor from 'ckeditor4-react';
import api from "../../utils/api";

class ModHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: null,
            changedAbout: null
        }
    }

    componentDidMount = () => this.getAbout();

    componentWillUnmount = () => this.setState({ about: null });

    getAbout = () => api.findBlog("5ed6749f8efd8459d3cb82f5").then(res => this.setState({ about: res.data.content }));

    content = ws => this.setState({ changedAbout: ws.editor.getData() });

    submitBlog = () => {
        api.modBlog({
            id: "5ed6749f8efd8459d3cb82f5",
            content: this.state.changedAbout.toString(),
            modified: new Date().toString().slice(4, 15).replace(/-/g, '/'),
        }).then(() => {
            alert("About section updated");
            this.getAbout();
        });
    }

    render() {
        return (
            <>
                <NavAdmin />
                <div className="centaur">
                    <div className="intermodal">
                        <h3>Edit About Section</h3>
                        {this.state.about && <CKEditor data={this.state.about} onChange={wp => this.content(wp)} />}
                    </div>
                </div>
                <button className="btn block green waves-effect waves-light" type="submit" name="action" onClick={this.submitBlog}>
                    Submit<i className="material-icons right">send</i>
                </button>
            </>
        )
    }
}

export default ModHome;