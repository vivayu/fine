import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import SimpleSlider from './components/SimpleSlider';
import FeatureDisplay from './components/FeatureDisplay';

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page4-page">
        <BasicTab />
        <SimpleSlider />
        <FeatureDisplay />
      </div>
    );
  }
}
