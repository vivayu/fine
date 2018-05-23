import React, { Component } from 'react';
import SimpleSlider from '../../components/SimpleSlider';
import DetailTable from './components/DetailTable';

export default class Contact extends Component {
  static displayName = 'Contact';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-page">
          <SimpleSlider />
          <DetailTable />
      </div>
    );
  }
}
