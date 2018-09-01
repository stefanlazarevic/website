import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppRoutes from './constants/AppRoutes';
import routes from './constants/AppRoutes';


class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                { routes.map((route, i) => <Route key={i} {...route} />) }
            </Switch>
        )
    }
}

export default AppRouter;
