import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseVoteCount } from '../actions/increaseVoteCount';

class VoteButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vote: {
                count: props.vote.count,
                pictureId: props.vote.picture_id
            }
        };
        // debugger
    }

    handleClick = () => {
        // debugger
        this.setState({
            ...this.state,
            vote: {
                ...this.state.vote,
                count: this.state.vote.count + 1
            }
        })
        debugger
        this.props.increaseVoteCount(this.state)

        // debugger
        // this.setState({ ...this.state, vote: { ...this.state.vote, count: this.state.vote.count + 1 } }, () => {
        //     this.props.increaseVoteCount(this.state);
        // })
        // debugger
    }



    render() {
        return (
            <div>
                <button onClick={this.handleClick}>VOTE</button>
            </div>
        )
    }
}

export default connect(null, { increaseVoteCount })(VoteButton);