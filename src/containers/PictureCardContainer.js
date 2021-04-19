import React, { Component } from 'react';
import Image from '../components/Image';
import ImageInformation from '../components/ImageInformation';
import VoteInterfaceContainer from '../containers/VoteInterfaceContainer';

class PictureCardContainer extends Component {
    render() {
        return (
            <div className="picture-card-container">
                <Image key={this.props.id} picture={this.props.picture} />
                <VoteInterfaceContainer key={this.props.id} vote={this.props.picture.vote} />
                <ImageInformation key={this.props.id} picture={this.props.picture} />
            </div>
        )
    }
}

export default PictureCardContainer;
