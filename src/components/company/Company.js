import * as React from 'react';

export default class Company extends React.Component {
    render() {
        const { experience } = this.props;
        return (
            <div className="company">
                <h3 className="company__title">
                    <span>{experience.TITLE}</span>
                    &nbsp;
                    <span>
                        <em>
                            ({
                                experience.START_DATE.getFullYear() === experience.END_DATE.getFullYear() ?
                                    experience.START_DATE.getFullYear() :
                                    `${experience.START_DATE.getFullYear()} - ${new Date().getDate() === experience.END_DATE.getDate() ? 'Present' : experience.END_DATE.getFullYear()}`
                            })
                        </em>
                    </span>
                </h3>
                <h4 className="company__subtitle">About:</h4>
                <div className="company__about">
                    <p dangerouslySetInnerHTML={{ __html: experience.ABOUT_COMPANY }}></p>
                </div>
                <h4 className="company__subtitle">Positions:</h4>
                <div className="company__roles">
                    {
                        experience.POSITIONS.map((role, index) => (
                            <div key={index} className="company__role">
                                <h5 className="company-role__title">
                                    <span>{role.TITLE}</span>
                                </h5>
                                <p className="company-role__description">
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
