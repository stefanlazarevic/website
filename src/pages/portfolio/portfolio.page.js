import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import ContentController from '../../content/ContentController';
import PageHeader from '../../components/pageHeader/PageHeader';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import WorkCard from '../../components/workCard/workCard';
import PageFooter from '../../components/pageFooter/pageFooter';

import env from '../../config/env.client';
import Routes from '../../constants/Routes';
class ExperiencePage extends React.Component {

    constructor() {
        super();
        this.Content = {};
    }

    componentWillMount() {
        if (typeof (window) !== 'undefined') {
            window.scrollTo(0, 0);
        }

        this.Content = ContentController.getContentForLanguage('en').portfolio;
    }

    componentDidMount() {
        ReactGA.pageview(Routes.PORTFOLIO);
    }

    head() {
        return (
            <Helmet>
                <title>{env.APP_BASE_TITLE} | {this.Content.PAGE_TITLE}</title>
                <meta name="description" content={this.Content.SEO.DESCRIPTION} />
                <meta name="keywords" content="stefan, developer, web" />
                <style>{this.Content.CRITICAL_CSS}</style>
                <link rel="canonical" href={`${env.APP_BASE_URL}${Routes.PORTFOLIO}`} />
                <link rel="stylesheet" async href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
            </Helmet>
        )
    }

    render() {
        return (
            <section id="about">
                {this.head()}
                <PageHeader />
                <div id="work-main">
                    <div className="f-grid">
                        <div className="f-col-12">
                            <h2 className="page__title f-text-center f-md-text-left">{this.Content.PAGE_TITLE}</h2>
                        </div>
                        <div className="f-col-12">
                            {this.Content.WORK.map((work, index) => {
                                return (
                                    <WorkCard key={index}
                                            title={work.TITLE}
                                            thumbnail_url={work.THUMBNAIL_URL}
                                            description={work.DESCRIPTION}
                                            scheme={work.SCHEME_CLASS}
                                            live_url={work.LIVE_URL}
                                            github_url={work.GITHUB_URL}
                                            tags={work.TAGS}
                                            lazy={index}
                                        />
                                )
                            })}
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

export default ExperiencePage;
