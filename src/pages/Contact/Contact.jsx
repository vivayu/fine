import React, { Component } from 'react';
import PriceCard from './components/PriceCard';
import DataStatistics from './components/DataStatistics';

export default class Contact extends Component {
  static displayName = 'Contact';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-page">
        <PriceCard />
        <DataStatistics />
      </div>
    );
  }
}
