import React, { Component } from 'react';
import LeftContentDisplay from './components/LeftContentDisplay';

export default class Cf4 extends Component {
  static displayName = 'Cf4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cf4-page">
        <LeftContentDisplay />
      </div>
    );
  }
}
