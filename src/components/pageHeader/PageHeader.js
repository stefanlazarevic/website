import * as React from 'react';
import Header from '../header/Header';

class PageHeader extends React.Component {
    render() {
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
