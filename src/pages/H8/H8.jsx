import React, { Component } from 'react';
import LeftContentDisplay from './components/LeftContentDisplay';

export default class H8 extends Component {
  static displayName = 'H8';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="h8-page">
        <LeftContentDisplay />
      </div>
    );
  }
}
