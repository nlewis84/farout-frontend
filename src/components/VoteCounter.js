import React from 'react';

const VoteCounter = props => {

    return (
        <div>
            <p className="counter">
                {props.vote.count} votes
            </p>
        </div>
    )
}

export default VoteCounter;