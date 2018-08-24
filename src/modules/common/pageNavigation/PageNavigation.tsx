import * as React from 'react';
import { Link } from 'react-router-dom';
import './PageNavigation.sass';

import PageNavigationProps from '../../../interfaces/PageNavigationProps';

class PageNavigation extends React.Component<PageNavigationProps> {
    public constructor(props: PageNavigationProps) {
        super(props);
    }

    public render() {
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
