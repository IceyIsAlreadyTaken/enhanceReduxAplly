import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Counter extends Component {

  render() {


    return (
      <div>
        <p>clicked {this.context.value} times</p>
      </div>
    );
  }
}

Counter.contextTypes = {
  value: PropTypes.string
}

export default Counter;


