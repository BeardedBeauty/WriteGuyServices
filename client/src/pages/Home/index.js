import React, { useState, useEffect } from "react";
import api from "../../utils/api";

function Home() {
    const [blog, change] = useState({});
    useEffect(() => { api.recentBlog().then(res => { if (res) change(res.data) }); }, []);
    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <p>home</p>
                    <button id="" className="btn blue waves-effect waves-green" type="submit" name="action" onClick={console.log(blog)}>yes</button>
                </div>
            </div>
        </>
    )
}

export default Home;