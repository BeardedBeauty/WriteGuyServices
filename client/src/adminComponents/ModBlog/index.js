import React from "react";
import NavAdmin from "../../components/Nav/NavAdmin";
import CKEditor from 'ckeditor4-react';
import "./style.css";
import api from "../../utils/api";

class ModBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create: 0,
            createbutton: "+ add new post",
            title: "",
            content: "<p>Please write content here</p>",
            image: "",
            blogSupporter: [],
            modifyID: ""
        }
        this.content = this.content.bind(this);
    }

    componentDidMount = () => this.getBlogs();

    create = () => {
        if (this.state.create === 1) this.setState({
            create: 0,
            createbutton: "+ add new post"
        });
        else if (this.state.create === 0) this.setState({
            create: 1,
            createbutton: "- cancel post"
        });
        else {
            this.setState({
                title: "",
                content: "<p>Please write content here</p>",
                image: "",
                modifyID: "",
                create: 0,
                createbutton: "+ add new post"
            });
        }
    }

    submitBlog = () => {
        api.createBlog({
            title: this.state.title,
            content: this.state.content,
            created: new Date().toString().slice(4, 15).replace(/-/g, '/'),
            image: this.state.image
        }).then(() => {
            this.getBlogs();
            this.create();
        });
    }

    title = qd => this.setState({ title: qd.target.value });

    content = qd => this.setState({ content: qd.editor.getData() });

    image = ql => this.setState({ image: ql.target.value });

    modify = qz => {
        api.findBlog(qz).then(res => {
            this.setState({
                title: res.data.title,
                image: res.data.image,
                content: res.data.content,
                modifyID: res.data._id,
                create: 2,
                createbutton: "∆ cancel edit"
            });
        });
    }

    getBlogs = () => api.getBlogs().then(res => {
        let qg = [];
        for (let qf = 0; qf < res.data.length; qf++) {
            qg.push(
                <div className="modBlogStub z-depth-3" id={res.data[qf]._id} key={res.data[qf]._id}>
                    <h5 className="blog" onClick={() => this.modify(res.data[qf]._id)}>{res.data[qf].title}</h5>
                    <button className="btn purple waves-effect waves-light" id="deletebtn" type="submit" name="action" onClick={() => {
                        this.deleteBlog([res.data[qf]._id, res.data[qf].title]);
                    }}>delete</button>
                </div>
            )
            if (qg.length === res.data.length) this.setState({ blogSupporter: qg.reverse() });
        }
    });

    deleteBlog = qh => {
        if (window.confirm(`Are you sure you want to delete ${qh[1]}?`)) api.deleteBlog(qh[0]).then(res => this.getBlogs());
    }

    editBlog = () => {
        api.modBlog({
            id: this.state.modifyID,
            image: this.state.image,
            title: this.state.title,
            content: this.state.content.toString(),
            modified: new Date().toString().slice(4, 15).replace(/-/g, '/'),
        }).then(() => {
            alert(`${this.state.title} updated`);
            this.getBlogs();
            this.create();
        });
    }

    render() {
        return (
            <>
                <NavAdmin />
                <div className="centaur">
                    <div className="intermodal">
                        <button id="blogPost" className="btn blue waves-effect waves-light" type="submit" name="action" onClick={this.create}>
                            {this.state.createbutton}
                        </button>
                        {this.state.create && <>
                            <div id="blogTitle">
                                <label htmlFor="title">title</label>
                                <input type="text" id="" name="title" onChange={qs => this.title(qs)} value={this.state.title} />
                                <label htmlFor="image">image</label>
                                <input type="text" id="" name="image" onChange={qs => this.image(qs)} value={this.state.image} />
                            </div>
                            <CKEditor data={this.state.content} onChange={qs => this.content(qs)} />
                            {this.state.create === 1 &&
                                <button className="btn block green waves-effect waves-light" type="submit" name="action" onClick={this.submitBlog}>
                                    Submit<i className="material-icons right">send</i>
                                </button>
                            }
                            {this.state.create === 2 &&
                                <button className="btn block orange waves-effect waves-light" type="submit" name="action" onClick={this.editBlog}>
                                    Update<i className="material-icons right">send</i>
                                </button>
                            }
                        </>}
                        {this.state.create === 0 && <div id="blogsHolder">{this.state.blogSupporter}</div>}
                    </div>
                </div>
            </>
        )
    }
}

export default ModBlog;