import * as React from 'react';
import './Courses.sass';

import Page from '../../interfaces/Page';

import ContentController from '../../content/ContentController';
import Content from '../../interfaces/Content';

export default class Courses extends React.Component implements Page {
    public Content: Content;
    public Title: string;

    public componentWillMount() {
        this.Content = ContentController.getContentForLanguage('en');
        this.Title = window.document.title;
        window.document.title = `${window.document.title} | ${this.Content.COURSES.TITLE}`
    }

    public componentWillUnmount() {
        window.document.title = this.Title;
    }

    public render() {
        return (
            <div>Courses Page</div>
        );
    }
}
