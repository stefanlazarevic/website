import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import Routes from '../../constants/Routes';

import env from '../../config/env.client';
class NotFoundPage extends React.Component {

    head() {
        return (
            <Helmet>
                <title>{env.APP_BASE_TITLE} | Server Error</title>
            </Helmet>
        )
    }

    render() {
        return (
            <section id="not-found">
                {this.head()}
                <PageHeader />
                <main id="not-found-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text--center page__title">500</h2>
                                <h4 className="text--center page__subtitle">Oups, looks like something went wrong.</h4>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default NotFoundPage;
