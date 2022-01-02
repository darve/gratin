
import { Component, h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';
import { Router, route, Link } from 'preact-router';

class Header extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <header>
                <Link href="/"><img src="/pub/img/lad.png" alt="" className="lad" /></Link>

                <div className="heading">
                    <h1>darve</h1>
                    <h2>futuristic code-serpent</h2>
                </div>

                <div className="contact">
                    <span className="links"><a className="nice-link" href="http://github.com/darve">github</a> / <a className="nice-link" href="mailto:dave@darve.co.uk">email</a></span>
                    <span className="please-go-away-colin">(recruiters: go away)</span>
                </div>
            </header>
        );
    }

}

export default connect([], actions)( Header );
