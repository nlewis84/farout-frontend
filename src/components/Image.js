import React from 'react';

const Image = props => {

    return (
        <div>
            <img className="image" src={props.picture.url} alt={props.picture.title} />
        </div>
    )
}

export default Image;