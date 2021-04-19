import React from 'react';
import { connect } from 'react-redux';
import { fetchTopFive } from '../actions/fetchTopFive';
import PictureCardContainer from '../containers/PictureCardContainer';

class TopFivePictures extends React.Component {
    componentDidMount() {
        this.props.fetchTopFive()
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

export default connect(mapStateToProps, { fetchTopFive })(TopFivePictures)