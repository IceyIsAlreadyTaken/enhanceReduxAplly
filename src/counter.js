import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from './actions/index';




class Counter extends Component {


  render() {
    const { value, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    console.log(increment);
    return (
      <div>
        <p>clicked {value} times</p>
        <button onClick={increment}>+</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>-</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={incrementIfOdd}>IncrementIfOdd</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={incrementAsync}>IncrementAsync</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementIfOdd: () => dispatch(incrementIfOdd()),
    incrementAsync: () => dispatch(incrementAsync())
  }
})(Counter);
