import React, { Component } from 'react';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('fine start');
    return <div className="home-page" />;
  }
}
