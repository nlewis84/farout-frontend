import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../actions/fetchPictures';

class NewestPictures extends React.Component {
    componentDidMount() {
        this.props.fetchPictures()
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

export default connect(mapStateToProps, { fetchPictures })(NewestPictures)