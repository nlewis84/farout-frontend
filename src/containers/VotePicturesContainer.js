import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../actions/fetchPictures';
import PictureCard from '../components/PictureCard';

class VotePicturesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPictures()
    }

    render() {
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
        newestPictures: state.newestPictures
    }
}

export default connect(mapStateToProps, { fetchPictures })(VotePicturesContainer)