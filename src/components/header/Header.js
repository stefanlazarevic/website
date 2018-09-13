import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../constants/Routes';
import Navigation from '../navigation/Navigation';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navigationExpanded: false,
        }
    }

    expandNavigation = event => {
        this.setState(state => {
            return {
                navigationExpanded: !state.navigationExpanded
            }
        });
    }

    render() {
        return (
            <header id="header" className="f-col-12 f-layer-2">
                <div className="f-grid">
                    <div className="f-col-12 f-text-left f-sm-text-center f-md-col-6 f-md-text-left">
                        <h1 className="logo">
                            <Link to={Routes.HOME} className="text--gray">
                                <span className="text--thin">Stefan</span>
                                <span>&nbsp;</span>
                                <span className="text--bold text--orange">Lazarevic</span>
                            </Link>
                        </h1>
                        <div className={`hamburger ${this.state.navigationExpanded ? 'active' : ''}`} onClick={this.expandNavigation}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    <div className="f-col-auto">
                        <Navigation expanded={this.state.navigationExpanded}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
