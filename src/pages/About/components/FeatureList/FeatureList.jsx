import React, { Component } from 'react';
import { Button } from '@icedesign/base';

export default class FeatureList extends Component {
  static displayName = 'FeatureList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.contentWrapper}>
          <div style={styles.titleWrapper}>
            <h3 style={styles.title}>关于我们</h3>
            <div style={styles.titleLine}>
              <div style={styles.titleHighlightLine} />
            </div>
          </div>
          <p style={styles.desc}>
              &nbsp;&nbsp;&nbsp;&nbsp;矫马润滑油脂(天津)有限公司是国际上大型跨国公司。系专业生产石油化工类产品，其产品的工矿设备用油和工程机械挖机用油早已享誉欧美各地。
          </p>
          <p style={styles.desc}>
              &nbsp;&nbsp;&nbsp;&nbsp;在二十世纪初期，矫马润滑油脂(天津)有限公司的分公司已经遍布世界各地，行业涉及石油勘探、石油加工、天然气、矿业冶金、润滑油生产等等。产品在市场上得到了各大工程机械公司的认可。优质的产品受到业内的一致好评！天津矫马润滑油公司先后与多家科研机构联手打造高端润滑油，服务全球。 矫马润滑油脂(天津)有限公司自成立以来，专注于研发高端产品供消费者使用，以消费者的需求和权益为发展方向，日后将会更加努力为消费者服务，做良心产品，铸品牌辉煌。
          </p>
        </div>
        <div style={styles.clipBackground} />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: 480,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    marginTop: 50,
  },
  titleLine: {
    width: 140,
    height: 2,
    marginTop: 17,
    background: '#EEEEEE',
    borderLeft: '2px solid ##5fb2f8',
  },
  titleHighlightLine: {// 下划线
    background: '#3080FE',
    height: 2,
    width: 33,
  },
  title: {
    color: '#223C4E',
    fontSize: 36,
  },
  desc: {// 描述字符
    color: '#6D7A82',
    fontSize: 16,
    lineHeight: 1.5,
    marginTop: 24,
    width: 875,
    textAlign: 'left',
  },
  clipBackground: {// 白色方片
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#fff',
    clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
  },
};
