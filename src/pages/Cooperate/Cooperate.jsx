import React, { Component } from 'react';
import TermsInfo from './components/TermsInfo';

export default class Cooperate extends Component {
  static displayName = 'Cooperate';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cooperate-page">
        <TermsInfo />
      </div>
    );
  }
}
