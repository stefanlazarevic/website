import React from 'react';

class WorkCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work__card">
                <img src={this.props.thumbnail_url} alt={`${this.props.title} Preview`}/>
                <div className="work__footer">
                    <h4>{this.props.title}</h4>
                </div>
            </div>
        )
    }
}

export default WorkCard;
