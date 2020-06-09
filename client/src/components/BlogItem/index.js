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
                        <div className="buttons">
                            <a href={"mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://write-guyservices.net" + match.url}>
                                <img className="shareButton" src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
                            </a>
                            <a href={"http://www.facebook.com/sharer.php?u=https://write-guyservices.net" + match.url} target="_blank">
                                <img className="shareButton" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                            </a>
                            <a href={"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://write-guyservices.net" + match.url} target="_blank">
                                <img className="shareButton" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
                                <img className="shareButton" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                            </a>
                        </div>
                        <br />
                        {qm && <div dangerouslySetInnerHTML={{ __html: qm }} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogItem;