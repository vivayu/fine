import React, { Component } from 'react';
import SimpleSlider from '../../components/SimpleSlider';
import ArticleList from './components/ArticleList';

export default class News extends Component {
  static displayName = 'News';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="news-page">
        <SimpleSlider />
        <ArticleList />
      </div>
    );
  }
}
