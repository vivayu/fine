import React, { Component } from 'react';
import SimpleSlider from '../../components/SimpleSlider';
import BrandDisplay from './components/BrandDisplay';

export default class Product extends Component {
  static displayName = 'Product';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-page">
        <SimpleSlider />
        <BrandDisplay />
      </div>
    );
  }
}
