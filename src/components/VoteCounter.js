import React from 'react';

const VoteCounter = props => {
    // debugger
    return (
        <div className="counter-container">
            <p className="counter">
                {props.vote.count} {props.vote.count === 1 ? "vote" : "votes"}
            </p>
        </div>
    )
}

export default VoteCounter;