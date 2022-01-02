
/** @jsx h */
import { Component, h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';
import { Router, route, Link } from 'preact-router';
import { Page, PageRoute } from './PageRoute';
import DummyComponent from './DummyComponent';
import marked from 'marked';

/**
 * Expose our built content to the app.
 */
const { list, items }  = require('../content-built.json');

/**
 * Define PageRoute objects for our routing
 */
const Home = PageRoute('Home');
const Blog = PageRoute('Blog');

class App extends Component {

    componentWillMount() {
    }

    componentDidMount() {
        this.scroll_to_top();
    }

    componentDidUpdate(props, state) {
    }

    route_changed() {
        this.scroll_to_top();
    }

    scroll_to_top() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render({ navigating }) {
        return (
            <div>
                <Router>
                    <Home path="/:slug?" default />
                    <Blog path="/blog/:slug" />
                    <DummyComponent path="/dummy" />
                </Router>
            </div>
        );
    }
}

export default connect(['route', 'slug', 'navigating'], actions)(App);
