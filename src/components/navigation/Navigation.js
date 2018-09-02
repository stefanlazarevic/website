import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../constants/Routes';
import ContentController from '../../content/ContentController';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.Content = ContentController.getContentForLanguage('en').navigation;
        this.state = {
            expanded: this.props.expanded
        }
    }

    componentWillReceiveProps(props) {
        this.setState(state => {
            return {
                expanded: props.expanded,
            }
        });
    }

    render() {
        return (
            <nav id="navigation" className={this.state.expanded ? 'active' : ''}>
                <ul className="navigation__list text--center text-md--right">
                    <li>
                        <NavLink to={Routes.ABOUT} className="navigation__link role-link">
                            <span>{this.Content.ABOUT}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.PROJECTS} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.PROJECTS}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.EXPERIENCE} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.EXPERIENCE}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.CONTACT} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.CONTACT}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
