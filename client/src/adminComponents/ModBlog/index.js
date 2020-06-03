import React from "react";
import NavAdmin from "../../components/Nav/NavAdmin";
import CKEditor from 'ckeditor4-react';
import "./style.css";
import api from "../../utils/api";

class ModBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            createbutton: "+ add new post",
            title: "",
            content: "",
            image: "",
            blogSupporter: []
        }
        this.content = this.content.bind(this);
    }

    componentDidMount = () => this.getBlogs();

    create = () => this.state.create ? this.setState({
        create: false,
        createbutton: "+ add new post"
    }) : this.setState({
        create: true,
        createbutton: "- cancel post"
    });

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
            console.log(res.data);
        });
    }

    getBlogs = () => {
        api.getBlogs().then(res => {
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
    }

    deleteBlog = qh => {
        if (window.confirm(`Are you sure you want to delete ${qh[1]}?`)) {
            api.deleteBlog(qh[0]).then(res => this.getBlogs());
        }
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
                                <input type="text" id="" name="title" onChange={qs => this.title(qs)} />
                                <label htmlFor="image">image</label>
                                <input type="text" id="" name="image" onChange={qs => this.image(qs)} />
                            </div>
                            <CKEditor data="<p>Please write content here</p>" onChange={qs => this.content(qs)} />
                            <button className="btn block green waves-effect waves-light" type="submit" name="action" onClick={this.submitBlog}>
                                Submit<i className="material-icons right">send</i>
                            </button>
                        </>}
                        <div id="blogsHolder">{this.state.blogSupporter}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default ModBlog;