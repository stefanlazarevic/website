import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

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

    componentDidMount() {
        ReactGA.pageview(Routes.INDEX);
    }

    head() {
        return (
            <Helmet>
                <title>{env.APP_BASE_TITLE}</title>
                <meta name="description" content={this.Content.SEO.DESCRIPTION} />
                <meta name="keywords" content={this.Content.SEO.KEYWORDS} />
                <style>{this.Content.CRITICAL_CSS}</style>
                <link rel="canonical" href={env.APP_BASE_URL} />
            </Helmet>
        );
    }

    render() {
        return (
            <section id="index">
                { this.head() }
                <div className="triangle-bottomright f-layer-1"></div>
                <div className="triangle-topleft f-layer-1"></div>
                <div className="f-grid f-layer-2">
                    <Header />
                    <div id="main" className="f-col-12">
                        <div className="f-grid">
                            <div className="f-col-12 f-md-col-6 f-order-1 f-md-order-2">
                                <div className="f-text-center f-md-text-right">
                                    <picture>
                                        <source srcSet="img/stefanlazarevic.webp" type="image/webp" />
                                        <source srcSet="img/stefanlazarevic.jpg" type="image/jpeg" />
                                        <img src="img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="index__image" />
                                    </picture>
                                </div>
                            </div>
                            <div className="f-col-12 f-md-col-6 f-order-2 f-md-order-1">
                                <h2 className="page__title--large f-text-center f-md-text-left">
                                    <span className="text--thin text--white">Full Stack&nbsp;</span>
                                    <br />
                                    <span className="text--orange">Web developer</span>
                                </h2>
                                <p className="text--gray index__paragraph f-text-center f-md-text-left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.INTRODUCTION }}></span>
                                </p>
                                <div className="f-text-center f-md-text-left">
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
