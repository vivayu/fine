import React, { Component } from 'react';
import RightContentDisplay from './components/RightContentDisplay';

export default class Ci4 extends Component {
  static displayName = 'Ci4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ci4-page">
        <RightContentDisplay />
      </div>
    );
  }
}
