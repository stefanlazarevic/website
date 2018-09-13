import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div className="page__navigation f-grid">
        <div className="f-col-6 f-no-pad">
            <Link to={props.prevLink} className="page-navigation__button" dangerouslySetInnerHTML={{ __html: props.prevText }}></Link>
        </div>
        <div className="f-col-6 f-no-pad f-text-right">
            <Link to={props.nextLink} className="page-navigation__button" dangerouslySetInnerHTML={{ __html: props.nextText }}></Link>
        </div>
    </div>
);
