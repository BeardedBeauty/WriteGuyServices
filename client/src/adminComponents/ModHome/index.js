import React from "react";
import NavAdmin from "../../components/Nav/NavAdmin";
import CKEditor from 'ckeditor4-react';

function ModHome() {
    return (
        <>
            <NavAdmin />
            <div className="centaur">
                <div className="intermodal">
                    <CKEditor data="<p>Please write about section here</p>" onChange={qs => this.content(qs)} />
                </div>
            </div>
        </>
    )
}

export default ModHome;