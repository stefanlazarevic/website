import React from 'react';

class WorkCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`portfolio__container flex flex-col flex-align-items-center ${this.props.scheme}`}>

                <div className={`portfolio__image flex flex-col flex-1 flex-align-items-center flex-justify-items-end`}>
                    <img className="image" src={this.props.thumbnail_url} alt={`${this.props.title} Preview`}/>
                </div>

                <div className="portfolio__content flex-1">
                    <h4 className="portfolio__title">{this.props.title}</h4>
                    <p className="portfolio__paragraph">
                        {this.props.description}
                    </p>

                    <div className="portfolio__footer">
                        { this.props.live_url ? (
                            <a href={this.props.live_url}>
                                <i className="fas fa-globe"></i>
                            </a>
                        ) : null }
                        { this.props.github_url ? (
                            <a href={this.props.github_url}>
                                <i className="fab fa-github"></i>
                            </a>
                        ) : null }
                    </div>
                </div>

            </div>
        )
    }
}

export default WorkCard;
