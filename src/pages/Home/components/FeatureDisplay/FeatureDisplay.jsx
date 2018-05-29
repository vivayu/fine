import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const data = [
  {
    title: '关于我们',
    description:
      '全合成动力柴油机油',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1RBTKi4rI8KJjy0FpXXb5hVXa-456-456.png',
  },
  {
    title: '新闻中心',
    description:
      '全工况柴油发动机油',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1LN_Ai9_I8KJjy0FoXXaFnVXa-450-453.png',
  },
  {
    title: '在线视频',
    description:
      '重负荷柴油发动机油',
    imgUrl:
      'https://img.alicdn.com/tfs/TB1K3JmgOqAXuNjy1XdXXaYcVXa-450-450.png',
  },
    {
        title: '行业动态',
        description:
            '重负荷柴油发动机油',
        imgUrl:
            'https://img.alicdn.com/tfs/TB1K3JmgOqAXuNjy1XdXXaYcVXa-450-450.png',
    },
    {
        title: '矫马风采',
        description:
            '重负荷柴油发动机油',
        imgUrl:
            'https://img.alicdn.com/tfs/TB1K3JmgOqAXuNjy1XdXXaYcVXa-450-450.png',
    },
    {
        title: '机油常识',
        description:
            '重负荷柴油发动机油',
        imgUrl:
            'https://img.alicdn.com/tfs/TB1K3JmgOqAXuNjy1XdXXaYcVXa-450-450.png',
    },
];

export default class FeatureDisplay extends Component {
  static displayName = 'FeatureDisplay';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="feature-display" style={styles.container}>

        {/*<div style={styles.items}>*/}

          <Row gutter="0" wrap>
            {data.map((item, index) => {
              return (
                <Col key={index} xxs="24" s="12" l="8">
                  <div style={styles.item}>
                    <img src={item.imgUrl} style={styles.image} alt="" />
                    <h3 style={styles.title}>{item.title}</h3>
                    <p style={styles.description}>{item.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>

        {/*</div>*/}

      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0 0px',
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    textAlign: 'center',
    padding: '0 30px',
    margin: '40px 0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  description: {
    fontSize: '13px',
    lineHeight: '22px',
    color: '#999',
  },
};
