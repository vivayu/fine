import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-table">
        <IceContainer title="联系我们">
          <ul style={styles.detailTable}>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>联系电话：</div>
              <div style={styles.detailBody}>022-87257101</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>公司网址：</div>
              <div style={styles.detailBody}>www.jiaomarh.com</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>公司邮箱：</div>
              <div style={styles.detailBody}>mail@jiaomarh.com</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>销售邮箱：</div>
              <div style={styles.detailBody}>sale@jiaomarh.com</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>公司地址：</div>
              <div style={styles.detailBody}>
                天津市自贸试验区(空港经济区)包航路航空产业支持中心
              </div>
            </li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  detailItem: {
    padding: '15px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};
