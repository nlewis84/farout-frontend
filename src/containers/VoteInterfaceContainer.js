import React, { Component } from 'react';
import VoteButton from '../components/VoteButton';
import VoteCounter from '../components/VoteCounter';

class VoteInterfaceContainer extends Component {

    render() {
        return (
            <div>
                <VoteButton vote={this.props.vote} />
                <VoteCounter vote={this.props.vote} />
            </div>
        )
    }
}

export default VoteInterfaceContainer;
