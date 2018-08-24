import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.sass';

import Routes from './constants/Routes';
import About from './modules/about/About';
import Contact from './modules/contact/Contact';
// import Courses from './modules/courses/Courses';
import NotFound from './modules/errors/NotFound';
import Experience from './modules/experience/Experience';
import Index from './modules/index/Index';
// import Projects from './modules/projects/Projects';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path={Routes.INDEX} component={Index} />
          <Route exact={true} path={Routes.ABOUT} component={About} />
          {/* <Route path={Routes.PROJECTS} component={Projects} /> */}
          <Route exact={true} path={Routes.EXPERIENCE} component={Experience} />
          {/* <Route path={Routes.COURSES} component={Courses} /> */}
          <Route exact={true} path={Routes.CONTACT} component={Contact} />
          <Route path={Routes.ALL} component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
