import React from 'react';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

class PageFooter extends React.Component {

    render() {
        return (
            <footer className="page__footer">
                <span>Designed and Crafted by Stefan Lazarevic under MIT License.</span>
                <br />
                <span>Domain provided by: <a href="https://www.hostinger.com">Hostinger</a>, Hosted on <a href="https://www.linode.com/">Linode</a>, source: <a href="https://github.com/stefanlazarevic/website">Github</a></span>
            </footer>
        );
    }
}

export default PageFooter;
