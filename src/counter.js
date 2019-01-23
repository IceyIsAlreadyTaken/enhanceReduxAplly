import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Counter extends Component {

  incrementIfOdd = () => {

    if (this.props.value % 2 === 0) return;
    this.props.increment();

  }

  incrementAsync = () => {

    const timer = setTimeout(() => {
      this.props.increment();
      clearTimeout(timer);
    }, 1000);

  }

  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <p>clicked {value} times</p>
        <button onClick={increment}>+</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>-</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>IncrementIfOdd</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>IncrementAsync</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

export default Counter;
