import * as React from 'react';
import './Company.sass';

import Career from '../../../../interfaces/Career';

export default class Company extends React.Component<{ career: Career }> {
    public render() {
        const { career } = this.props;
        return (
            <div className="company">
                <h3 className="company__title">
                    <span>{career.TITLE}</span>
                    {/* tslint:disable-next-line:jsx-self-close */}
                    <i className="fas fa-external-link-alt"></i>
                    &nbsp;
                    <span>
                        <em>
                            ({
                                career.START_DATE.getFullYear() === career.END_DATE.getFullYear() ?
                                career.START_DATE.getFullYear() :
                                `${career.START_DATE.getFullYear()} - ${career.END_DATE.getFullYear()}`
                            })
                        </em>
                    </span>
                </h3>
                <h4 className="company__subtitle">About:</h4>
                <div className="company__about">
                    {/* <p>{ this.props.about }</p> */}
                    <p>{career.ABOUT}</p>
                </div>
                <h4 className="company__subtitle">Positions:</h4>
                <div className="company__roles">
                    {
                        career.ROLES.map(role => (
                            <div className="company__role">
                                <h5 className="company-role__title js-details" role="button">
                                    <span>{role.TITLE}</span>
                                </h5>
                                <p className="company-role__description js-summary">
                                   {role.DESCRIPTION}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
