import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppRoutes from './constants/AppRoutes';
import routes from './constants/AppRoutes';
import ReactGA from 'react-ga';

import env from './config/env.client';

class AppRouter extends React.Component {
    constructor() {
        super();
        ReactGA.initialize(env.APP_GID);
    }

    render() {
        return (
            <Switch>
                { routes.map((route, i) => <Route key={i} {...route} />) }
            </Switch>
        )
    }
}

export default AppRouter;
