import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../actions/fetchPictures';
import PictureCardContainer from '../containers/PictureCardContainer';

class VotePictures extends React.Component {
    componentDidMount() {
        this.props.fetchPictures()
    }

    render() {
        // debugger
        return (
            <div className="container">
                {this.props.pictures.map((picture) =>
                    <PictureCardContainer key={picture.id} picture={picture} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { fetchPictures })(VotePictures)