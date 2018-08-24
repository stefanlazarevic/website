import * as React from 'react';
import './Experience.sass';

import Page from '../../interfaces/Page';
import PageHeader from '../common/pageHeader/PageHeader';
import PageNavigation from '../common/pageNavigation/PageNavigation';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

import Company from './components/company/Company';

import Routes from '../../constants/Routes';

export default class Experience extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
        window.document.title = `${window.document.title} | ${this.Content.EXPERIENCE.TITLE}`
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <section id="experience">
                <PageHeader />
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="page__title text--center text-md--left">
                                    <span>{this.Content.EXPERIENCE.TITLE}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                {
                                    this.Content.CAREER.map(
                                        (career, index: number) => <Company key={index} career={career} />
                                    )
                                }
                            </div>
                            <div className="col-md-4 text--right">
                                {/* Advertise section. */}
                                <a href="https://share.payoneer.com/nav/5_ZiG1iWwAV3ukdYMP28_D9CfiLiDzsoCgXGZMVTHo7Vgz1jR2FQzxAlwjtmw7iW_PQwujVoGZK_jO-Za3wQ8A2">
                                    <img src={ this._getPayoneerImage() } alt="Payoneer Affiliate"
                                        style={{ width: 300, height: 250 }} />
                                </a>
                            </div>
                        </div>
                        <PageNavigation prevLink={Routes.PROJECTS}
                            prevText={this.Content.EXPERIENCE.BACK_TEXT}
                            nextLink={Routes.COURSES}
                            nextText={this.Content.EXPERIENCE.NEXT_TEXT}
                        />
                    </div>
                </main>
            </section>
        );
    }

    private _getPayoneerImage(): string {
        const imagesPath = [
            '/assets/img/Payoneer336x280.jpg',
            '/assets/img/Payoneer300x250.jpg'
        ];

        return imagesPath[Math.floor((Math.random() * 2))];
    }
}
