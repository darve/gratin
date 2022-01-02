
import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initial_state = {
    route: '',
    slug: '',
    navigating: false
};

export const store = devtools(createStore(initial_state));
