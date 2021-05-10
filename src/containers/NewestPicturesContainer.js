import React from 'react';
import { connect } from 'react-redux';
import { fetchNewest } from '../actions/fetchNewest';
import PictureCardNoVote from '../components/PictureCardNoVote';

class NewestPicturesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchNewest()
    }

    render() {
        // debugger
        return (
            <div className="container">
                {this.props.pictures.map((picture) =>
                    <PictureCardNoVote key={picture.id} picture={picture} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        picture: state.picture,
        pictures: state.pictures,
        topFivePictures: state.topFivePictures
    }
}

export default connect(mapStateToProps, { fetchNewest })(NewestPicturesContainer)