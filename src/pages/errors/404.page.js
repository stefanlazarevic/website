import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import Routes from '../../constants/Routes';

class NotFoundPage extends React.Component {

    head() {
        return (
            <Helmet>
                <title>Stefan Lazarevic - Web Developer | Page Not Found</title>
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
                                <h2 className="text--center page__title">404</h2>
                                <h4 className="text--center page__subtitle">Hmm, looks like I didn't make this page, if you wanted to know this information about me, please <Link className="text--orange" to={Routes.CONTACT}>contact me.</Link></h4>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default NotFoundPage;
