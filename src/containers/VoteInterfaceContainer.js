import React, { Component } from 'react';
import VoteButton from '../components/VoteButton';
import VoteCounter from '../components/VoteCounter';
// import { connect } from 'react-redux';
// import { increaseVoteCount } from '../actions/increaseVoteCount';

class VoteInterfaceContainer extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: '',
    //         pictureId: props.vote.picture_id
    //     };
    //     // debugger
    // }

    // handleClick = () => {
    //     // debugger
    //     this.setState({
    //         ...this.state,
    //         count: this.props.vote.count + 1
    //     }, () => {
    //         this.props.increaseVoteCount(this.state);
    //         // debugger
    //     })
    // }

    render() {
        return (
            <div className="vote-interface">
                <VoteButton vote={this.props.vote} />
                {/* <VoteButton vote={this.props.vote} handleClick={this.props.handleClick()} /> */}
                <VoteCounter vote={this.props.vote} />
            </div>
        )
    }
}

// export default connect(null, { increaseVoteCount })(VoteInterfaceContainer);
export default VoteInterfaceContainer;
