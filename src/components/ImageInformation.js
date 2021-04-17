import React from 'react';

const ImageInformation = props => {
    return (
        <div className="information">
            <h2>{props.picture.title}</h2>
            <h3>{props.picture.date}</h3>
            <p>{props.picture.explanation}</p>
        </div>
    )
}

export default ImageInformation;