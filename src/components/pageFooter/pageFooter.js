import React from 'react';

class PageFooter extends React.Component {

    render() {
        return (
            <footer className="page__footer">
                <span>Designed and Crafted by Stefan Lazarevic under CC License.</span>
                <br />
                <span>Domain provided by: <a href="https://www.hostinger.com">Hostinger</a>, Hosted on <a href="https://www.netlify.com/">Netlify</a>, source: <a href="https://github.com/stefanlazarevic/website">Github</a></span>
            </footer>
        );
    }
}

export default PageFooter;
