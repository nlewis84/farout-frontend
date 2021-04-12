import React from 'react';

const Image = props => {

    return (
        <div>
            Image
            <img src={props.picture.url} width="120" />
        </div>
    )
}

export default Image;