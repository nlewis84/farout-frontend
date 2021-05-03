import React, { Component } from 'react';
import Image from '../components/Image';
import ImageInformation from '../components/ImageInformation';
import VoteCounter from '../components/VoteCounter';

class PictureCardNoVoteContainer extends Component {
    render() {
        return (
            <div className="picture-card-container">
                <Image key={this.props.id} picture={this.props.picture} />
                <VoteCounter vote={this.props.picture.vote} />
                <ImageInformation key={this.props.id} picture={this.props.picture} />
            </div>
        )
    }
}

export default PictureCardNoVoteContainer;
