import React from 'react';

const Image = props => {

    return (
        <div>
            <img src={props.picture.url} style={{ width: 200 }} alt={props.picture.title} />
        </div>
    )
}

export default Image;