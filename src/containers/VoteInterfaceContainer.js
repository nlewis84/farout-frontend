import React, { Component } from 'react';
import VoteButton from '../components/VoteButton';
import VoteCounter from '../components/VoteCounter';
import { connect } from 'react-redux';
import { increaseVoteCount } from '../actions/increaseVoteCount';

class VoteInterfaceContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: '',
            pictureId: props.vote.picture_id
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick = () => {
    handleClick() {
        this.setState({
            ...this.state,
            count: this.props.vote.count + 1
        }, () => {
            this.props.increaseVoteCount(this.state);
        })
    }

    render() {
        return (
            <div className="vote-interface">
                {/* <VoteButton vote={this.props.vote} /> */}
                <VoteButton vote={this.props.vote} handleClick={this.handleClick} />
                <VoteCounter vote={this.props.vote} />
            </div>
        )
    }
}

export default connect(null, { increaseVoteCount })(VoteInterfaceContainer);
// export default VoteInterfaceContainer;
