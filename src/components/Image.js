import React from 'react';

const Image = props => {

    return (
        <div>
            Image
            <img src={props.picture.url} />
        </div>
    )
}

export default Image;