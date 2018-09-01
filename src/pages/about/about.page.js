import React from 'react';
import { Helmet } from 'react-helmet';
import ContentController from '../../content/ContentController';
import Routes from '../../constants/Routes';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import PageHeader from '../../components/pageHeader/PageHeader';

class AboutPage extends React.Component {
    constructor() {
        super();
        this.Content = {};
    }

    componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en').about;
    }

    head() {
        return (
            <Helmet>
                <title>Stefan Lazarevic - Full Stact Web Developer | {this.Content.PAGE_TITLE}</title>
                <meta name="description" content="Read more about who Stefan Lazarevic is and what he does."></meta>
            </Helmet>
        )
    }

    render() {
        return (
            <section id="about">
                {this.head()}
                <PageHeader />
                <div id="about-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 col-md-push-7 text--center text-md--right">
                                <picture>
                                    <source srcSet="/img/stefanlazarevic.webp" type="image/webp" />
                                    <source srcSet="/img/stefanlazarevic.jpg" type="image/jpeg" />
                                    <img src="/img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="about__image" />
                                </picture>
                            </div>
                            <div className="col-12 col-md-7 col-md-pull-5">
                                <h2 className="page__title text--center text-md--left">{this.Content.ABOUT_ME_TITLE}</h2>
                                <p className="about__paragraph text--center text-md--left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.ABOUT_ME }}></span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="page__subtitle text--center text-md--left">
                                    <span>{this.Content.BRIEF_HISTORY_TITLE}</span>
                                </h3>
                                <p className="about__paragraph text--center text-md--left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.BRIEF_HISTORY }}></span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="page__subtitle text--center text-md--left">
                                    <span>{this.Content.WEB_DEVELOPMENT_TITLE}</span>
                                </h3>
                                <p className="about__paragraph text--center text-md--left">
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.WEB_DEVELOPMENT }}></span>
                                </p>
                            </div>
                        </div>
                        <PageNavigation prevLink={this.Content.PAGE_NAVIGATION.BACK_BUTTON_LINK}
                            prevText={this.Content.PAGE_NAVIGATION.BACK_BUTTON_TEXT}
                            nextLink={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_LINK}
                            nextText={this.Content.PAGE_NAVIGATION.FORWARD_BUTTON_TEXT}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutPage;
