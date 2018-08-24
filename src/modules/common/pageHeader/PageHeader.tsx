import * as React from 'react';
import './PageHeader.sass';

import Header from '../header/Header';

class PageHeader extends React.Component {
    public render() {
        return (
            <div className="page__header">
                <div className="container">
                    <Header />
                </div>
            </div>
        );
    }
}

export default PageHeader;
