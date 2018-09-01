import * as React from 'react';

export default class Company extends React.Component {
    render() {
        const { experience } = this.props;
        return (
            <div className="company">
                <h3 className="company__title">
                    <span>{experience.TITLE}</span>
                    <i className="fas fa-external-link-alt"></i>
                    &nbsp;
                    <span>
                        <em>
                            ({
                                experience.START_DATE.getFullYear() === experience.END_DATE.getFullYear() ?
                                    experience.START_DATE.getFullYear() :
                                    `${experience.START_DATE.getFullYear()} - ${experience.END_DATE.getFullYear()}`
                            })
                        </em>
                    </span>
                </h3>
                <h4 className="company__subtitle">About:</h4>
                <div className="company__about">
                    <p>{experience.ABOUT_COMPANY}</p>
                </div>
                <h4 className="company__subtitle">Positions:</h4>
                <div className="company__roles">
                    {
                        experience.POSITIONS.map((role, index) => (
                            <div key={index} className="company__role">
                                <h5 className="company-role__title js-details">
                                    <span>{role.TITLE}</span>
                                </h5>
                                <p className="company-role__description js-summary">
                                    <span dangerouslySetInnerHTML={{ __html: role.MY_ROLE }}></span>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
