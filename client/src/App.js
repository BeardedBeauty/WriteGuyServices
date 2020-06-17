import React from 'react';
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import Authorization from "./components/Authorization";
import AuthAdmin from "./components/Authorization/admin"
import ModHome from "./adminComponents/ModHome";
import ModBlog from './adminComponents/ModBlog';
import BlogItem from "./components/BlogItem";
import Profile from "./pages/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "materialize-css";
import M from "materialize-css";
import './App.css';
import Footer from './components/Footer';
// import api from "./utils/api";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/book" exact component={Authorization(Book)} />
                        <Route path="/mod" exact component={AuthAdmin(ModHome)} />
                        <Route path="/modblog" exact component={AuthAdmin(ModBlog)} />
                        <Route path="/blog/:id" exact component={BlogItem} />
                        <Route path="/profile" exact component={Authorization(Profile)} />
                    </Switch>
                    <Slider />
                </Router>
                {/* <Footer /> */}
            </>
        );
    }
}

export default App;