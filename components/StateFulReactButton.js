import React, { Component } from 'react';

export default class StateFulReactButton extends Component {
  render() {
    const { handleOnclick } = this.props;

    return (
      <button onClick={handleOnclick}>React stateful button</button>
    );
  }
}