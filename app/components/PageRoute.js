
import { Component, h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';

export class Page extends Component {
    componentWillMount() { this.props.actn_navigation_started('home', this.props.matches.slug); }
    componentDidMount() { setTimeout( () => { this.props.actn_navigation_finished(); }, 300); }
    render() { return null; }
}

export const PageRoute = (name) => {
    let c = ({[name] : class extends Page {}})[name];
    return connect([], actions)(c);
};
