import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseVoteCount } from '../actions/increaseVoteCount';

class VoteButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: '',
            pictureId: props.vote.picture_id
        };
        // debugger
    }

    handleClick = () => {
        // debugger
        this.setState({
            ...this.state,
            count: this.props.vote.count + 1
        }, () => {
            this.props.increaseVoteCount(this.state);
            // debugger
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.props.handleClick}>VOTE</button> */}
                <button onClick={this.handleClick}>VOTE</button>
            </div>
        )
    }
}

// export default VoteButton;
export default connect(null, { increaseVoteCount })(VoteButton);