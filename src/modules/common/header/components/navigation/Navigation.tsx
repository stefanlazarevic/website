import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.sass';

import Routes from '../../../../../constants/Routes';
import ContentController from '../../../../../content/ContentController';
import Content from '../../../../../interfaces/Content';

class Navigation extends React.Component {
    private Content: Content;

    public constructor(props: any) {
        super(props);
        this.Content = ContentController.getContentForLanguage('en');
    }

    public render() {
        return (
            <nav id="navigation">
                <ul className="navigation__list text--center text-md--right">
                    <li>
                        <NavLink to={Routes.ABOUT} className="navigation__link role-link">
                            <span>{this.Content.NAVIGATION.ABOUT}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.PROJECTS} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.NAVIGATION.PROJECTS}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.EXPERIENCE} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.NAVIGATION.EXPERIENCE}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.COURSES} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.NAVIGATION.COURSES}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={Routes.CONTACT} activeClassName='active' className="navigation__link role-link">
                            <span>{this.Content.NAVIGATION.CONTACT}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
