import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseVoteCount } from '../actions/increaseVoteCount';

class VoteButton extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: props.vote.count,
    //         playerId: props.vote.playerId
    //     };
    // }

    // handleClick = (event) => {
    //     const newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // }



    render() {
        return (
            <div>
                <button onClick={this.handleClick}>VOTE</button>
            </div>
        )
    }
}

export default connect(null, { increaseVoteCount })(VoteButton);