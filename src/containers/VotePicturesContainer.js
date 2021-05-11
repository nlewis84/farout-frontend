import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../actions/fetchPictures';
import PictureCard from '../components/PictureCard';

class VotePicturesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPictures()
    }

    render() {
        // debugger
        return (
            <div className="container">
                {this.props.pictures.map((picture) =>
                    <PictureCard key={picture.id} picture={picture} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        newestPictures: state.newestPictures,
        // pictures: state.pictures,
        // topFivePictures: state.topFivePictures,
        // filteredPictures: state.filteredPictures
    }
}

export default connect(mapStateToProps, { fetchPictures })(VotePicturesContainer)