import React from 'react';
import CounterWrap from './counter-wrap';
import PropTypes from 'prop-types';

class App extends React.Component {

    // 父组件定义context
    getChildContext() {
        return {
            value: 'haha'
        }
    }

    render() {
        return (
            <div>

                <CounterWrap />

            </div>

        )
    }
}

App.childContextTypes = {
    value: PropTypes.string
}

export default App;