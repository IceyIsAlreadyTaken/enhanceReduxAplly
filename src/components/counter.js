import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions/index';




class Counter extends Component {


  undo = () => {
    this.props.dispatch({
      type: "UNDO"
    })
  }

  redo = () => {
    this.props.dispatch({
      type: "REDO"
    })
  }

  increment = () => {
    this.props.dispatch(increment());
  }

  decrement = () => {
    this.props.dispatch(decrement());
  }

  incrementIfOdd = () => {
    this.props.dispatch(incrementIfOdd());
  }

  incrementAsync = () => {
    this.props.dispatch(incrementAsync());
  }







  render() {
    const { value } = this.props;

    return (
      <div>
        <p>clicked {value} times</p>
        <button onClick={this.increment}>+</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>IncrementIfOdd</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>IncrementAsync</button>
        <div>
          <button onClick={this.undo}>UnDo</button>
          <button onClick={this.redo}>ReDo</button>
        </div>
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

// export default connect(mapStateToProps, (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     incrementIfOdd: () => dispatch(incrementIfOdd()),
//     incrementAsync: () => dispatch(incrementAsync())
//   }
// }, (stateProps, dispatchProps, ownProps) => {
//   return {
//     ...stateProps,
//     ...dispatchProps,
//     ownProps
//   }
// }, { forwardRef: true })(Counter);


export default connect(mapStateToProps)(Counter);


