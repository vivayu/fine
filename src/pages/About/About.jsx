import React, { Component } from 'react';
import FeatureList from './components/FeatureList';

export default class About extends Component {
  static displayName = 'About';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        <FeatureList />
      </div>
    );
  }
}
