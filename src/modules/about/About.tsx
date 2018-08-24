import * as React from 'react';
import './About.sass';

import Page from '../../interfaces/Page';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

import Routes from '../../constants/Routes';

import PageHeader from '../common/pageHeader/PageHeader';
import PageNavigation from '../common/pageNavigation/PageNavigation';

export default class About extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
        window.document.title = `${window.document.title} | ${this.Content.ABOUT.TITLE}`
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <section id="about">
                <PageHeader />
                <main id="about-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 col-md-push-7 text--center text-md--right">
                                <picture>
                                    <source srcSet="/assets/img/stefanlazarevic.webp" type="image/webp" />
                                    <source srcSet="/assets/img/stefanlazarevic.jpg" type="image/jpeg" />
                                    <img src="/assets/img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="about__image" itemProp="primaryImageOfPage" />
                                </picture>
                            </div>
                            <div className="col-12 col-md-7 col-md-pull-5">
                                <h2 className="page__title text--center text-md--left">{this.Content.ABOUT.TITLE}</h2>
                                <p className="about__paragraph text--center text-md--left">
                                    {/* tslint:disable-next-line:jsx-self-close */}
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.ABOUT.PARAGRAPH_ONE }}></span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="page__subtitle text--center text-md--left">
                                    <span>{this.Content.ABOUT.SUBTITLE_ONE}</span>
                                </h3>
                                <p className="about__paragraph text--center text-md--left">
                                    {/* tslint:disable-next-line:jsx-self-close */}
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.ABOUT.PARAGRAPH_TWO }}></span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="page__subtitle text--center text-md--left">
                                    <span>{this.Content.ABOUT.SUBTITLE_TWO}</span>
                                </h3>
                                <p className="about__paragraph text--center text-md--left">
                                    {/* tslint:disable-next-line:jsx-self-close */}
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.ABOUT.PARAGRAPH_THREE }}></span>
                                </p>
                            </div>
                        </div>
                        <PageNavigation prevLink={Routes.INDEX}
                                        prevText={this.Content.ABOUT.BACK_TEXT}
                                        nextLink={Routes.PROJECTS}
                                        nextText={this.Content.ABOUT.NEXT_TEXT}
                        />
                    </div>
                </main>
            </section>
        );
    }
}
