import React from 'react';
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import "materialize-css";
import M from "materialize-css";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems, {});
            let instance = M.Sidenav.getInstance(".sidenav");
            // instance.open();
        });
    }

    render() {
        return (
            <>
                <Nav />
                <div className="centaur">
                    <div className="intermodal">
                        <p>write guy services, inc</p>
                    </div>
                </div>
                <Slider />
            </>
        );
    }
}

export default App;