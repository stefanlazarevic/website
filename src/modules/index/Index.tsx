import * as React from 'react';
import './Index.sass';

import { Link } from 'react-router-dom';

import Page from '../../interfaces/Page';

import Routes from '../../constants/Routes';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

import Header from '../common/header/Header';

export default class Index extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <section id="index">
                {/* tslint:disable-next-line:jsx-self-close */}
                <div className="triangle-bottomright"></div>
                {/* tslint:disable-next-line:jsx-self-close */}
                <div className="triangle-topleft"></div>
                <div className="container">
                    <Header />
                    <main id="main" itemProp="mainContentOfPage">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-md-push-6">
                                <div className="text--center text-md--right">
                                    <picture>
                                        <source srcSet="/assets/img/stefanlazarevic.webp" type="image/webp" />
                                        <source srcSet="/assets/img/stefanlazarevic.jpg" type="image/jpeg" />
                                        <img src="/assets/img/stefanlazarevic.jpg" alt="Stefan Lazarevic" className="index__image" itemProp="primaryImageOfPage" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-md-pull-6">
                                <h2 className="page__title--large text--center text-md--left" itemProp="headline">
                                    <span className="text--thin text--white">Full Stack</span>
                                    <br />
                                    <span className="text--orange">Web developer</span>
                                </h2>
                                <p className="text--gray index__paragraph text--center text-md--left">
                                    {/* tslint:disable-next-line:jsx-self-close */}
                                    <span dangerouslySetInnerHTML={{ __html: this.Content.INDEX.INTRODUCTION }}></span>
                                </p>
                                <div className="text--center text-md--left">
                                    <Link to={Routes.ABOUT} className="index__button">
                                        <span>{this.Content.INDEX.ACTION_BUTTON }</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        );
    }
}
