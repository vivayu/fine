import React, { Component } from 'react';
import RightContentDisplay from './components/RightContentDisplay';

export default class Ch4 extends Component {
  static displayName = 'Ch4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ch4-page">
        <RightContentDisplay />
      </div>
    );
  }
}
