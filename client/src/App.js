import React from 'react';
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Book from "./pages/Book";
import Authorization from "./components/Authorization";
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

    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/book" exact component={Authorization(Book)} />
                </Switch>
                <Slider />
            </Router>
        );
    }
}

export default App;