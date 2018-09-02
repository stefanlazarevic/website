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
            <header id="header">
                <div className="row">
                    <div className="col-sm-12 col-md-3 text--left text-sm--center text-md--left">
                        <h1 className="logo">
                            <Link to={Routes.HOME} className="text--gray">
                                <span className="text--thin">Stefan</span>
                                <span>&nbsp;</span>
                                <span className="text--bold text--orange">Lazarević</span>
                            </Link>
                            <div className={`hamburger ${this.state.navigationExpanded ? 'active' : ''}`} onClick={this.expandNavigation}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </h1>
                    </div>
                    <div className="col-sm-12 col-md-9 text-right">
                        <Navigation expanded={this.state.navigationExpanded}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
