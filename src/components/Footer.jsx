import React, { PureComponent } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

export default class Footer extends PureComponent {
    static displayName = 'Footer';
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer-info" style={styles.container}>

                <div style={styles.items}>
                    <Row wrap gutter="20">
                        <Col xxs="24" s="8" l="8">
                            <div style={styles.item}>
                                <h2 style={styles.itemTitle}>产品介绍</h2>
                                <ul style={styles.nav}>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            乘用车用油
                                        </a>
                                    </li>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            工程机械用油
                                        </a>
                                    </li> <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            工业油脂
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxs="24" s="8" l="8">
                            <div style={styles.item}>
                                <h2 style={styles.itemTitle}>合作伙伴</h2>
                                <ul style={styles.nav}>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            淘宝
                                        </a>
                                    </li>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            天猫
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xxs="24" s="8" l="8">
                            <div style={styles.item}>
                                <h2 style={styles.itemTitle}>关注我们</h2>
                                <ul style={styles.nav}>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            新浪微博
                                        </a>
                                    </li>
                                    <li style={styles.navItem}>
                                        <a style={styles.navLink} href="/">
                                            微信公众号
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <p style={styles.copyRight}>© 2017 矫马润滑油脂(天津)有限公司 </p>
            </div>
        );
    }
}

const styles = {
    container: {
        background: '#1861D5',
        padding: '20px 0',
        width: '100%',
    },
    items: {
        maxWidth: '1080px',
        margin: '0 auto',
    },
    item: {
        padding: '20px 30px',
        textAlign: 'center',
    },
    itemTitle: {
        margin: '0 0 10px',
        color: '#fff',
        fontSize: '24px',
    },
    navLink: {
        display: 'block',
        height: '26px',
        lineHeight: '26px',
        color: '#E1EEFF',
    },
    copyRight: {
        color: '#fff',
        textAlign: 'center',
    },
};
