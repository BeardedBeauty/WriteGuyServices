import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BlogContainer(props) {
    return (
        <>
            <div className="blogClosed z-depth-3" id={props.id}>
                <img className="blogCoverImg" src={props.image} />
                <p className="created">{props.created}</p>
                <Link to={`/blog/${props.id}`} >
                    <div className="moreContainer">
                        <div className="more">Read More…</div>
                    </div>
                </Link>
                <h5 className="blogBoxTitle">{props.title}</h5>
                <div className="generated" dangerouslySetInnerHTML={{ __html: props.content.toString() }} />
            </div>
        </>
    )
}

export default BlogContainer;