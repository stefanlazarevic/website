import * as React from 'react';
import { Link } from 'react-router-dom';

class PageNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page__navigation row">
                <div className="col-6">
                    <Link to={this.props.prevLink} className="page-navigation__button">{this.props.prevText}</Link>
                </div>
                <div className="col-6 text--right">
                    <Link to={this.props.nextLink} className="page-navigation__button">{this.props.nextText}</Link>
                </div>
            </div>
        );
    }
}

export default PageNavigation;
