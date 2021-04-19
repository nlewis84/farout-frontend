import React from 'react';
import { connect } from 'react-redux';
import { fetchNewest } from '../actions/fetchNewest';
import PictureCardContainer from '../containers/PictureCardContainer';

class NewestPictures extends React.Component {
    componentDidMount() {
        this.props.fetchNewest()
    }

    render() {
        return "newest";
    }
}

const mapStateToProps = state => {
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { fetchNewest })(NewestPictures)