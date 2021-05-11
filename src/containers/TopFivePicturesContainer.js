import React from 'react';
import { connect } from 'react-redux';
import { fetchTopFive } from '../actions/fetchTopFive';
import PictureCardNoVote from '../components/PictureCardNoVote';

class TopFivePicturesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchTopFive()
    }

    render() {
        // debugger
        return (
            <div className="container">
                {this.props.topFivePictures.map((picture) =>
                    <PictureCardNoVote key={picture.id} picture={picture} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        topFivePictures: state.topFivePictures
    }
}

export default connect(mapStateToProps, { fetchTopFive })(TopFivePicturesContainer)