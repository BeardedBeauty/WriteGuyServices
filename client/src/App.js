import React from 'react';
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "materialize-css";
import M from "materialize-css";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursor: { x: 0, y: 0 }
        }
    }

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems, {});
            let instance = M.Sidenav.getInstance(".sidenav");
        });
    }

    cursorMove(q) {
        this.setState({ cursor: { x: q.screenX, y: q.screenY } });
    }

    render() {
        const { x, y } = this.state.cursor;
        return (
            <div onMouseMove={this.cursorMove.bind(this)}>
                <Nav />
                <div className="centaur">
                    <div className="intermodal">
                        <p>write guy services, inc</p>
                    </div>
                </div>
                <Slider />
                <h1>Mouse coordinates: {y}</h1>
            </div>
        );
    }
}

export default App;