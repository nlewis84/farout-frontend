import React, { Component } from 'react';
import Image from './Image';
import ImageInformation from './ImageInformation';
import VoteCounter from './VoteCounter';

class PictureCardNoVote extends Component {
    render() {
        // debugger
        return (
            <div className="picture-card-container">
                <Image key={this.props.id} picture={this.props.picture} />
                <VoteCounter vote={this.props.picture.vote} />
                <ImageInformation key={this.props.id} picture={this.props.picture} />
            </div>
        )
    }
}

export default PictureCardNoVote;