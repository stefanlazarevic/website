import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import RouteTitles from '../../constants/RouteTitles';
import RoutesExternal from '../../constants/RoutesExternal';
import Routes from '../../constants/Routes';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import ContentController from '../../content/ContentController';
import PageFooter from '../../components/pageFooter/pageFooter';

import env from '../../config/env.client';
class ContactPage extends React.Component {
    constructor() {
        super();
        this.Content = {};
    }

    componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en').contact;
    }

    head() {
        return (
            <Helmet>
                <title>Stefan Lazarevic - Full Stack Web Developer | {this.Content.PAGE_TITLE}</title>
                <meta name="description" content={this.Content.SEO.DESCRIPTION}></meta>
                <meta name="keywords" content={this.Content.SEO.KEYWORDS}></meta>
                <style>{this.Content.CRITICAL_CSS}</style>
                <link rel="canonical" href={`${env.APP_BASE_URL}${Routes.CONTACT}`} />
            </Helmet>
        )
    }

    render() {
        return (
            <section id="contact">
                { this.head() }
                <PageHeader />
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="page__title text--center text-md--left">
                                    <span>{this.Content.PAGE_TITLE}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="contact__paragraph text--center text-md--left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.CONTACT_ME_TEXT }}></span>
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <h4 className="text--thin text--center">or connect with me on social networks</h4>
                                <div className="social text--center">
                                    <a href={RoutesExternal.LINKEDIN} title={RouteTitles.LINKEDIN}>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href={RoutesExternal.GITHUB} title={RouteTitles.GITHUB}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href={RoutesExternal.SKYPE} title={RouteTitles.SKYPE}>
                                        <i className="fab fa-skype"></i>
                                    </a>
                                    <a href={RoutesExternal.GOOGLE} title={RouteTitles.GOOGLE}>
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <PageNavigation prevLink={this.Content.PAGE_NAVIGATION.BACK_BUTTON_LINK}
                            prevText={this.Content.PAGE_NAVIGATION.BACK_BUTTON_TEXT}
                            nextLink={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_LINK}
                            nextText={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_TEXT}
                        />
                    </div>
                </div>
                <PageFooter />
            </section>
        );
    }
}

export default ContactPage;
