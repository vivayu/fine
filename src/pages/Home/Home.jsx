import React, {Component} from 'react';
import SimpleSlider from '../../components/SimpleSlider';
import BasicTab from './components/BasicTab';
import FeatureDisplay from './components/FeatureDisplay';
import UserTrafficStastistics from './components/UserTrafficStastistics';

export default class Home extends Component {
    static displayName = 'Home';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home-page">
                <SimpleSlider />
                {/*<BasicTab/>*/}
                <FeatureDisplay />
            </div>
        );
    }

}
