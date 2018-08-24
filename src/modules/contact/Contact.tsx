import * as React from 'react';
import './Contact.sass';

import Page from '../../interfaces/Page';

import Routes from '../../constants/Routes';
import RoutesExternal from '../../constants/RoutesExternal';
import RouteTitles from '../../constants/RouteTitles';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

import PageHeader from '../common/pageHeader/PageHeader';
import PageNavigation from '../common/pageNavigation/PageNavigation';

export default class Contact extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
        window.document.title = `${window.document.title} | ${this.Content.CONTACT.TITLE}`
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <section id="contact">
                <PageHeader />
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="page__title text--center text-md--left">
                                    <span>{this.Content.CONTACT.TITLE}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="contact__paragraph text--center text-md--left">
                                    {/* tslint:disable-next-line:jsx-self-close */}
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.CONTACT.PARAGRAPH_ONE }}></span>
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <h4 className="text--thin text--center">or connect with me on social networks</h4>
                                <div className="social text--center">
                                    <a href={RoutesExternal.LINKEDIN} title={RouteTitles.LINKEDIN}>
                                        {/* tslint:disable-next-line:jsx-self-close */}
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href={RoutesExternal.GITHUB} title={RouteTitles.GITHUB}>
                                        {/* tslint:disable-next-line:jsx-self-close */}
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href={RoutesExternal.SKYPE} title={RouteTitles.SKYPE}>
                                        {/* tslint:disable-next-line:jsx-self-close */}
                                        <i className="fab fa-skype"></i>
                                    </a>
                                    <a href={RoutesExternal.GOOGLE} title={RouteTitles.GOOGLE}>
                                        {/* tslint:disable-next-line:jsx-self-close */}
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <PageNavigation prevLink={Routes.COURSES}
                            prevText={this.Content.CONTACT.BACK_TEXT}
                            nextLink={Routes.INDEX}
                            nextText={this.Content.CONTACT.NEXT_TEXT}
                        />
                    </div>
                </main>
            </section>
        );
    }
}
