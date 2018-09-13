import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import ContentController from '../../content/ContentController';
import Routes from '../../constants/Routes';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import PageHeader from '../../components/pageHeader/PageHeader';
import PageFooter from '../../components/pageFooter/pageFooter';

import env from '../../config/env.client';
class AboutPage extends React.Component {
    constructor() {
        super();
        this.Content = {};
    }

    componentWillMount() {
        if (typeof (window) !== 'undefined') {
            window.scrollTo(0, 0);
        }

        this.Content = ContentController.getContentForLanguage('en').about;
    }

    componentDidMount() {
        ReactGA.pageview(Routes.ABOUT);
    }

    head() {
        return (
            <Helmet>
                <title>{env.APP_BASE_TITLE} | {this.Content.PAGE_TITLE}</title>
                <meta name="description" content={this.Content.SEO.DESCRIPTION}></meta>
                <meta name="keywords" content={this.Content.SEO.KEYWORDS} />
                <style>{this.Content.CRITICAL_CSS}</style>
                <link rel="canonical" href={`${env.APP_BASE_URL}${Routes.ABOUT}`} />
            </Helmet>
        )
    }

    render() {
        return (
            <section id="about">
                {this.head()}
                <PageHeader />
                <div id="about-main">
                    <div className="f-grid">
                        <div className="f f-dir-col f-md-dir-row-rev">
                            <div className="f-col-12 f-md-col-5 f-text-center f-md-text-right">
                                <picture>
                                    <source srcSet="/img/stefanlazarevic.webp" type="image/webp" />
                                    <source srcSet="/img/stefanlazarevic.jpg" type="image/jpeg" />
                                    <img src="/img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="about__image" />
                                </picture>
                            </div>
                            <div className="f-col-12 f-md-col-7 f-text-center f-md-text-left">
                                <h2 className="page__title">{this.Content.ABOUT_ME_TITLE}</h2>
                                <p className="about__paragraph">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.ABOUT_ME }}></span>
                                </p>
                            </div>
                        </div>
                        <div className="f-col-12">
                            <h3 className="page__subtitle f-text-center f-md-text-left">
                                <span>{this.Content.BRIEF_HISTORY_TITLE}</span>
                            </h3>
                            <p className="about__paragraph f-text-center f-md-text-left">
                                <span dangerouslySetInnerHTML={{ __html: this.Content.BRIEF_HISTORY }}></span>
                            </p>
                        </div>
                        <div className="f-col-12">
                            <h3 className="page__subtitle f-text-center f-md-text-left">
                                <span>{this.Content.WEB_DEVELOPMENT_TITLE}</span>
                            </h3>
                            <p className="about__paragraph f-text-center f-md-text-left">
                                <span dangerouslySetInnerHTML={{ __html: this.Content.WEB_DEVELOPMENT }}></span>
                            </p>
                        </div>
                        <div className="f-col-12">
                            <PageNavigation prevLink={this.Content.PAGE_NAVIGATION.BACK_BUTTON_LINK}
                                prevText={this.Content.PAGE_NAVIGATION.BACK_BUTTON_TEXT}
                                nextLink={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_LINK}
                                nextText={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_TEXT}
                            />
                        </div>
                    </div>
                </div>
                <PageFooter />
            </section>
        );
    }
}

export default AboutPage;
