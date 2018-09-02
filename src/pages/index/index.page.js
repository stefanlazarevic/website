import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from '../../constants/Routes';
import ContentController from '../../content/ContentController';
import Header from '../../components/header/Header';

import env from '../../config/env.client';

class IndexPage extends React.Component {
    constructor() {
        super();
        this.Content = {};
    }

    componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en').index;
    }

    head() {
        return (
            <Helmet>
                <title>{env.APP_BASE_TITLE} | Portfolio</title>
                <meta name="description" content={this.Content.SEO.DESCRIPTION}></meta>
                <style>{this.Content.CRITICAL_CSS}</style>
                <link rel="canonical" href={env.APP_BASE_URL} />
            </Helmet>
        );
    }

    render() {
        return (
            <section id="index">
                { this.head() }
                <div className="triangle-bottomright"></div>
                <div className="triangle-topleft"></div>
                <div className="container">
                    <Header />
                    <div id="main">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-md-push-6">
                                <div className="text--center text-md--right">
                                    <picture>
                                        <source srcSet="img/stefanlazarevic.webp" type="image/webp" />
                                        <source srcSet="img/stefanlazarevic.jpg" type="image/jpeg" />
                                        <img src="img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="index__image" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-md-pull-6">
                                <h2 className="page__title--large text--center text-md--left">
                                    <span className="text--thin text--white">Full Stack</span>
                                    <br />
                                    <span className="text--orange">Web developer</span>
                                </h2>
                                <p className="text--gray index__paragraph text--center text-md--left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.INTRODUCTION }}></span>
                                </p>
                                <div className="text--center text-md--left">
                                    <Link to={Routes.ABOUT} className="index__button">
                                        <span>{this.Content.ACTION_BUTTON_TEXT}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default IndexPage;
