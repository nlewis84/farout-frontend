import React from 'react';

const VoteCounter = props => {

    return (
        <div>
            <p>
                {props.vote.count} votes
            </p>
        </div>
    )
}

export default VoteCounter;