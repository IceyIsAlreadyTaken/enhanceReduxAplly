import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './counter';
import * as serviceWorker from './serviceWorker';
import counter from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(counter, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>
    ,
    document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
