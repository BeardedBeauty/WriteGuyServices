import React from "react";
import "./style.css";

function BlogContainer(props) {
    return (
        <div className="blogClosed z-depth-3" id={props.id}>
            <img className="blogCoverImg" src={props.image} />
            <div className="moreContainer"><div className="more">Read More…</div></div>
            <h4 className="blogBoxTitle">{props.title}</h4>
            <div className="generated" dangerouslySetInnerHTML={{ __html: props.content.toString() }} />
        </div >
    )
}

export default BlogContainer;