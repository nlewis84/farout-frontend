import React from 'react';

const VoteButton = props => {
    return (
        <div>
            <button onClick={props.handleClick}>VOTE</button>
        </div>
    )
}

export default VoteButton;
