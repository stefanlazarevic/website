import React from 'react';
import LazyLoad from 'react-lazyload';

export default props => (
    <div className="portfolio__container">
        <div className={`f-grid ${props.scheme}`}>
            <div className="f f-col-12 f-md-col-6 f-no-pad f-justify-center f-align-end">
                <div className="portfolio__image f f-dir-col f-col-12 f-no-pad">
                    {
                        props.lazy ? (
                            <LazyLoad className="image">
                                <picture>
                                    <source srcSet={`${props.thumbnail_url}.webp`} type="image/webp" />
                                    <source srcSet={`${props.thumbnail_url}.png`} type="image/png" />
                                    <img className="image" src={`${props.thumbnail_url}.png`} alt={`${props.title} Preview`} />
                                </picture>

                            </LazyLoad>
                        ) :
                        (
                            <picture>
                                <source srcSet={`${props.thumbnail_url}.webp`} type="image/webp" />
                                <source srcSet={`${props.thumbnail_url}.png`} type="image/png" />
                                <img className="image" src={`${props.thumbnail_url}.png`} alt={`${props.title} Preview`} />
                            </picture>
                        )
                    }
                </div>
            </div>
            <div className="portfolio__content f f-dir-col f-justify-center f-col-12 f-md-col-6">
                <h4 className="portfolio__title">{props.title}</h4>
                <p className="portfolio__paragraph">
                    {props.description}
                </p>
                <div>
                    {props.tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)}
                </div>
                <div className="portfolio__footer">
                    {
                        props.live_url ? (
                            <i className="fas fa-globe" data-href={props.live_url}></i>
                        ) : null
                    }
                    {
                        props.github_url ? (
                            <i className="fab fa-github" data-href={props.github_url}></i>
                        ) : null
                    }
                </div>
            </div>
        </div>
    </div>



    // <div className={`portfolio__container f f-dir-col f-md-dir-row f-align-stretch ${props.scheme}`}>
    //     <div className={`portfolio__image f f-md-col-6 f-align-end f-justify-center`}>
    //         {
    //             props.lazy ? (
    //                 <LazyLoad className="image">
    //                     <img className="image" src={props.thumbnail_url} alt={`${props.title} Preview`} />
    //                 </LazyLoad>
    //             ) : <img className="image" src={props.thumbnail_url} alt={`${props.title} Preview`} />
    //         }
    //     </div>
    //     <div className="portfolio__content ">
    //         <h4 className="portfolio__title">{props.title}</h4>
    //         <p className="portfolio__paragraph">
    //             {props.description}
    //         </p>
    //         <div>
    //             {props.tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)}
    //         </div>
    //         <div className="portfolio__footer">
    //             {props.live_url ? (
    //                 <i className="fas fa-globe" data-href={props.live_url}></i>
    //             ) : null}
    //             {props.github_url ? (
    //                 <i className="fab fa-github" data-href={props.github_url}></i>
    //             ) : null}
    //         </div>
    //     </div>
    // </div>
);
