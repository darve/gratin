
import { Component, h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';

export class DummyComponent extends Component {
    componentWillMount() {
        this.props.actn_navigation_started('home', this.props.matches.slug);
    }

    componentDidMount() {
        setTimeout( () => { this.props.actn_navigation_finished(); }, 300);
    }

    render() {
        return (
            <div><h1>Dummy component lol</h1></div>
        )
    }
}

export default connect([], actions)(DummyComponent);
