import React from 'react';

class PageFooter extends React.Component {
    render() {
        return (
            <footer className="page__footer">
                <span>Designed and Crafted by Stefan Lazarevic under MIT license 2018.</span>
                <br />
                <span>Domain provided by: <a href="https://www.namecheap.com/">Namecheap</a>, Hosted on <a href="https://www.linode.com/">Linode</a>
                <br />Source code: <a href="https://github.com/stefanlazarevic/website">Github</a></span>
            </footer>
        );
    }
}

export default PageFooter;
