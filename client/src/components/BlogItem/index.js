import React, { useState } from "react";
import api from "../../utils/api";
// import "./style.css";

const BlogItem = ({ match }) => {
    const [qm, wq] = useState(null);
    const [ww, we] = useState(null);
    api.findBlog(match.params.id.toString()).then(res => {
        wq(res.data.content.toString())
        we(res.data.title.toString())
    });
    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    {qm && <>
                        <div className="autoCenter">
                            <h3>{ww}</h3>
                        </div>
                        <div className="generated" dangerouslySetInnerHTML={{ __html: qm }} />
                    </>}
                    {!qm && <></>}
                </div>
            </div>
        </>
    )
}

export default BlogItem;