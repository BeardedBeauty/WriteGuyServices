import React from 'react';
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
            // let instance = M.Sidenav.getInstance(".sidenav");
        });
    }

    cursorMove(q) {
        this.setState({ cursor: { x: q.screenX, y: q.screenY } });
    }

    render() {
        return (
            <div onMouseMove={this.cursorMove.bind(this)}>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                    <Slider />
                </Router>
            </div>
        );
    }
}

export default App;