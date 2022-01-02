
/** @jsx h */
import 'babel-polyfill';
import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { store } from './store';
import App from './components/App';

require('./scss/app.scss');

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
