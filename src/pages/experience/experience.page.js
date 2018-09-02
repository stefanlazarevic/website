import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import Routes from '../../constants/Routes';
import ContentController from '../../content/ContentController';
import PageNavigation from '../../components/pageNavigation/PageNavigation';
import Company from '../../components/company/Company';
import PageFooter from '../../components/pageFooter/pageFooter';

// import dotenv from 'dotenv';
class ExperiencePage extends React.Component {

    componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en').experience;
        // this.env = dotenv.config().parsed;
    }

    head() {
        return (
            <Helmet>
                <title>Stefan Lazarevic - Full Stact Web Developer | {this.Content.PAGE_TITLE}</title>
                <meta name="description" content="What my skills are and how I gained them over the years of working in IT industry."></meta>
                <meta name="keywords" content="stefan, lazarevic, developer"></meta>
                <style>{this.Content.CRITICAL_CSS}</style>
                {/* <link rel="canonical" href={`${this.env.APP_BASE_URL}${Routes.EXPERIENCE}`} /> */}
            </Helmet>
        )
    }

    render() {
        return (
            <section id="experience">
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
                            <div className="col-12 col-md-8">
                                {
                                    this.Content.EXPERIENCE.map(
                                        (experience, index) => <Company key={index} experience={experience} />
                                    )
                                }
                            </div>
                            <div className="col-md-4 text--right"></div>
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

export default ExperiencePage;
