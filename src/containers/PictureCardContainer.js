import React, { Component } from 'react';
import Image from '../components/Image';


class PictureCardContainer extends Component {

    render() {
        return (
            <div>
                picture card container
                <Image picture={this.props.picture} />
            </div>
        )
    }
}

export default PictureCardContainer;
