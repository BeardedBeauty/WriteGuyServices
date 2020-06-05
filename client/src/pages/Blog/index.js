import React from "react";
import BlogContainer from "../../components/BlogContainer";
import api from "../../utils/api";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogsData: null
        }
    }

    componentDidMount = () => api.getBlogs().then(res => {
        let qx = [];
        for (let qc = 0; qc < res.data.length; qc++) {
            const qv = res.data[qc];
            qx.push(
                <BlogContainer
                    title={qv.title}
                    content={qv.content}
                    created={qv.created}
                    modified={qv.modified}
                    image={qv.image}
                    key={qv._id} />
            )
            if (qx.length === res.data.length) this.setState({ blogsData: qx.reverse() });
        }
    });

    render() {
        return (
            <>
                <div className="centaur">
                    <div className="intermodal">
                        <h3>Blog</h3>
                        {this.state.blogsData}
                    </div>
                </div>
            </>
        )
    }
}

export default Blog;