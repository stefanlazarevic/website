import React from 'react';
import { Helmet } from 'react-helmet';

class ProjectsPage extends React.Component {

    head() {
        return (
            <Helmet>
                <title>Stefan Lazarevic - Full Stack Web Developer | </title>
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <h1>Projects page</h1>
            </div>
        );
    }
}

export default ProjectsPage;
