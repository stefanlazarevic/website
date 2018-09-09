import React from 'react';
import LazyLoad from 'react-lazyload';

class WorkCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`portfolio__container flex flex-col flex-align-items-center ${this.props.scheme}`}>

                <div className={`portfolio__image flex flex-col flex-1 flex-align-items-center flex-justify-items-end`}>
                    <LazyLoad height={220}>
                        <img className="image" src={this.props.thumbnail_url} alt={`${this.props.title} Preview`}/>
                    </LazyLoad>
                </div>

                <div className="portfolio__content flex-1">
                    <h4 className="portfolio__title">{this.props.title}</h4>
                    <p className="portfolio__paragraph">
                        {this.props.description}
                    </p>

                    <div>
                        {this.props.tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)}
                    </div>

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
