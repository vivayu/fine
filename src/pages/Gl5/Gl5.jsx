import React, { Component } from 'react';
import LeftContentDisplay from './components/LeftContentDisplay';

export default class Gl5 extends Component {
  static displayName = 'Gl5';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gl5-page">
        <LeftContentDisplay />
      </div>
    );
  }
}
