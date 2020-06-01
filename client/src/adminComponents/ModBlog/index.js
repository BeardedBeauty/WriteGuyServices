import React from "react";
import NavAdmin from "../../components/Nav/NavAdmin";

class ModBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            createbutton: "+ add new post"
        }
    }

    create = () => this.state.create ? this.setState({
        create: false,
        createbutton: "+ add new post"
    }) : this.setState({
        create: true,
        createbutton: "- cancel post"
    });

    render() {
        return (
            <>
                <NavAdmin />
                <div className="centaur">
                    <div className="intermodal">
                        <button id="" className="btn blue waves-effect waves-light" type="submit" name="action" onClick={this.create}>
                            {this.state.createbutton}
                        </button>
                        {this.state.create && <>
                            <textarea id="createblog" name="createblogcontent">
                                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                            </textarea>
                            <button className="btn block green waves-effect waves-light" type="submit" name="action" >
                                Submit<i className="material-icons right">send</i>
                            </button>
                        </>}
                    </div>
                </div>
            </>
        )
    }
}

export default ModBlog;