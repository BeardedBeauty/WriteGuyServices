import React, { useState } from "react";
import api from "../../utils/api";
import "./style.css";

const BlogItem = ({ match }) => {
    const [qm, wq] = useState(null);
    const [ww, we] = useState(null);
    const [wr, wt] = useState(null);
    const [wy, wu] = useState(null);
    const [wi, wo] = useState(null);
    api.findBlog(match.params.id.toString()).then(res => {
        wq(res.data.content.toString());
        we(res.data.title.toString());
        wt(res.data.created.toString());
        wo(res.data.image.toString());
        if (res.data.modified !== "-") wu(res.data.modified.toString());
    });

    return (
        <>
            <div className="centaur">
                <div className="intermodal" id="blogBackground">
                    <div className="contentTitle">
                        <h4>{ww}</h4>
                        <p className="creationDate">Written by Casey Ochs on {wr}</p>
                        {wy && <p className="creationDate">Modified {wy}</p>}
                    </div>
                    {wi && <img className="titleImg" src={wi} />}
                    <div className="internalHTML">
                        {qm && <div dangerouslySetInnerHTML={{ __html: qm }} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogItem;