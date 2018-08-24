import * as React from 'react';
import './NotFound.sass';

import { Link } from 'react-router-dom';

import Routes from '../../constants/Routes';

import Page from '../../interfaces/Page';
import PageHeader from '../common/pageHeader/PageHeader';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

class NotFound extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
        window.document.title = `${window.document.title} | Page Not Found`
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <section id="not-found">
                <PageHeader />
                <main id="not-found-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text--center page__title">404</h2>
                                <h4 className="text--center page__subtitle">Hmm, looks like I didn't make this page, if you wanted to know this information about me, please <Link className="text--orange" to={Routes.CONTACT}>contact me.</Link></h4>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default NotFound;
