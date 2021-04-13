import React, { Component } from 'react';
import Image from '../components/Image';
import ImageInformation from '../components/ImageInformation';
import VoteInterfaceContainer from '../containers/VoteInterfaceContainer';

class PictureCardContainer extends Component {

    render() {
        return (
            <div>
                <Image key={this.props.index} picture={this.props.picture} />
                <ImageInformation key={this.props.index} picture={this.props.picture} />
                <VoteInterfaceContainer key={this.props.index} vote={this.props.picture.vote} />
            </div>
        )
    }
}

export default PictureCardContainer;
