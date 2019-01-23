import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './counter';
import * as serviceWorker from './serviceWorker';
import counter from './reducers/index'
import { createStore } from 'redux';

const store = createStore(counter);

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            increment={() => { store.dispatch({ type: 'INCREMENT' }) }}
            decrement={() => { store.dispatch({ type: 'DECREMENT' }) }} />,
        document.getElementById('root'));
}

render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
