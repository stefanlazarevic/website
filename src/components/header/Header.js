import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../constants/Routes';
import Navigation from '../navigation/Navigation';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="row">
                    <div className="col-sm-12 col-md-3 text--left text-sm--center text-md--left">
                        <h1 className="logo">
                            <Link to={Routes.INDEX} className="text--gray">
                                <span className="text--thin">Stefan</span>
                                <span>&nbsp;</span>
                                <span className="text--bold text--orange">Lazarević</span>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-sm-12 col-md-9 text-right">
                        <Navigation />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
