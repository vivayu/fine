import React, { Component } from 'react';
import Img from '@icedesign/img';
import { Grid } from '@icedesign/base';
import { enquireScreen } from 'enquire-js';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: 'CI4',
    subject:
      'CI-4采用合成动力柴油发动机油按照欧盟最新法规，针对大马力重载车辆的发动机工作特点而研制，选用新能源全新配方提供更强的发动机保护及清洁功效，令发动机使用寿命更长，即便在非常苛刻的环境下仍可提供最大的保护。',
    headPic:
      'https://img.alicdn.com/tfs/TB1QMwlSXXXXXaUXXXXXXXXXXXX-122-122.png',
    pic: 'https://img.alicdn.com/tfs/TB1n6H_SXXXXXc3XpXXXXXXXXXX-616-348.png',
    url: '#/ci4',
  },
  {
    title: 'CH4',
    subject:
      'CH-4全工况柴油发动机油采用新能源配方，适用于涡轮增压及自然吸气式四冲程柴油发动机，以满足在重负荷、高速、高温等苛刻条件下运转的发动机润滑需要，用于需求使用API CH-4级油品的多种苛刻条件下操作的车辆及设备。',
    headPic: 'https://img.alicdn.com/tfs/TB1Z4CLSXXXXXcHXVXXXXXXXXXX-61-61.png',
    pic: 'https://img.alicdn.com/tfs/TB1bHO6SXXXXXaiXFXXXXXXXXXX-308-174.png',
    url: '#/ci4',
  },
  {
    title: 'CF4',
    subject: 'CF-4重负荷柴油发动机油选用优质精制基础油，针对各类卡车大马力新型发动机的工作特点调制，采用特强抗磨保护配方，令油压强大而稳定，能有效的减少发动机的磨损，从而延长发动机的使用寿命。',
    headPic:
      'https://img.alicdn.com/tfs/TB1kX62SXXXXXXJXVXXXXXXXXXX-122-122.png',
    pic: 'https://img.alicdn.com/tfs/TB17bzrSXXXXXbpaFXXXXXXXXXX-616-348.png',
    url: '#/ci4',
  },
  {
    title: 'X46',
    subject:
      'X46、X68采用日本加氯精制基础油和高性能抗氧化剂、抗磨剂，油品在使用过程中，不易发生氧化劣化，粘度变化小，可以长时间使用，且具有优异的抗磨损性，能减少零部件磨损，能有效防止因少量水混入产生的故障，且能在金属表面形成吸附保护膜，防止生锈。',
    headPic:
      'https://img.alicdn.com/tfs/TB19C_9SXXXXXc1XpXXXXXXXXXX-122-122.png',
    pic: 'https://img.alicdn.com/tfs/TB1IkEjSXXXXXb1XXXXXXXXXXXX-616-348.png',
    url: '#/ci4',
  },
    {
        title: 'GL-5',
        subject:
            'GL-5重负荷齿轮油选用优质精制基础油，针对各类卡车工程机械大马力新型发动机的工作特点调制，采用特强抗磨保护配方，令油压强大而稳定，能有效的减少齿轮的磨损，从而延长发动机的使用寿命。',
        headPic:
            'https://img.alicdn.com/tfs/TB19C_9SXXXXXc1XpXXXXXXXXXX-122-122.png',
        pic: 'https://img.alicdn.com/tfs/TB1IkEjSXXXXXb1XXXXXXXXXXXX-616-348.png',
        url: '#/ci4',
    },
    {
        title: '8#',
        subject:
            '8#高效液力传动油具有优良的抗磨性，防锈性及防腐性，优良的氧化安定性和热安定性，使油品在苛刻的运行条件下不易变质，良好的摩擦特性，降低传动损耗和变速冲击，良好的抗乳化性、抗泡性与密封材料相容性。',
        headPic:
            'https://img.alicdn.com/tfs/TB19C_9SXXXXXc1XpXXXXXXXXXX-122-122.png',
        pic: 'https://img.alicdn.com/tfs/TB1IkEjSXXXXXb1XXXXXXXXXXXX-616-348.png',
        url: '#/ci4',
    },
];

export default class BrandDisplay extends Component {
  static displayName = 'BrandDisplay';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  render() {
    const { isMobile } = this.state;
    const logoWidth = isMobile ? 150 : 195;
    const logoHeight = isMobile ? 150 : 175;

    return (
      <div className="brand-display" style={styles.container}>
        <div style={styles.brandHeader}>
          <h5 style={styles.brandTitle}>品牌展示</h5>
        </div>
        <Row gutter="20" wrap>
          {dataSource.map((item, index) => {
            return (
              <Col xxs="24" s="12" l="12" key={index} style={styles.brandItem}>
                <a href={item.url} style={styles.brandItemContent}>
                  <div>
                    <Img
                      width={logoWidth}
                      height={logoHeight}
                      src={item.pic}
                      type="cover"
                      alt="图片"
                    />
                  </div>
                  <div style={styles.caseContent}>
                    <div style={styles.caseSubject}>
                      <img
                        src={item.headPic}
                        style={styles.subjectImage}
                        alt="图片"
                      />
                      <span style={styles.subjectDesc}>{item.title}</span>
                    </div>
                    <p style={styles.caseDetail}>{item.subject}</p>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 20px',
  },
  brandHeader: {
    position: 'relative',
    textAlign: 'center',
  },
  brandTitle: {
    marginBottom: '40px',
    fontSize: '20px',
    color: '#333333',
  },
  brandItem: {
    height: '175px',
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    marginBottom: '30px',
    overflow: 'hidden',
  },
  brandItemContent: {
    display: 'flex',
  },

  caseContent: {},
  caseSubject: {
    margin: '0 10px 0',
    lineHeight: '60px',
    height: '60px',
  },
  subjectImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
  subjectDesc: {
    fontSize: '16px',
    color: '#333333',
    height: '60px',
    verticalAlign: 'top',
    marginLeft: '12px',
  },
  caseDetail: {
    marginTop: 0,
    fontSize: '12px',
    color: '#666666',
    padding: '0 16px',
    textAlign: 'left',
  },
};
