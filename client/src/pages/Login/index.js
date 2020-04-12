import React, { useState } from "react";
import "./style.css";

function Login() {
    const [state, change] = useState({
        drawerLog: true,
        drawer: ["closed", "open"]
    })

    const openDrawer = w => {
        w ? change({
            ...state,
            drawer: ["closed", "open"]
        }) : change({
            ...state,
            drawer: ["open", "closed"]
        })
    }

    return (
        <>
            <div className="centaur">
                <div className="intermodal">
                    <div className="logBlock z-depth-3">
                        <h3>Log in</h3>
                        <form>
                            <label for="fname">email</label>
                            <input type="text" id="fname" name="fname" />
                            <label for="passw1">password</label>
                            <input type="text" id="passw1" name="passw1" />
                        </form>
                    </div>
                    <div className="logBlock z-depth-3">
                        <h3>Sign up</h3>
                        <form>
                            <label for="name">name</label>
                            <input type="text" id="name" name="name" />
                            <label for="email2">email</label>
                            <input type="text" id="email2" name="email2" />
                            <label for="passw2">password</label>
                            <input type="text" id="passw2" name="passw2" />
                        </form>
                    </div>
                    <div id="signinDrawer" className={state.drawer[0] + " drawer"} onClick={openDrawer.bind(this, 0)}>
                        <h3>Sign up</h3>
                        <form>
                            <label for="name">name</label>
                            <input type="text" id="name" name="name" />
                            <label for="email2">email</label>
                            <input type="text" id="email2" name="email2" />
                            <label for="passw2">password</label>
                            <input type="text" id="passw2" name="passw2" />
                        </form>
                    </div>
                    <div id="loginDrawer" className={state.drawer[1] + " drawer"} onClick={openDrawer.bind(this, 1)}>
                        <h3>Log in</h3>
                        <form>
                            <label for="fname">email</label>
                            <input type="text" id="fname" name="fname" />
                            <label for="passw1">password</label>
                            <input type="text" id="passw1" name="passw1" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;