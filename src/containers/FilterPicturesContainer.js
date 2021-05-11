import React from 'react';
import { connect } from 'react-redux';
// import { filterPictures } from '../actions/filterPictures';
// import PictureCardNoVote from '../components/PictureCardNoVote';
import Image from '../components/Image';

class FilterPicturesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const searchResults = this.props.filteredPictures.filter(picture => picture.explanation.includes(this.state.value))

        // debugger
        return (
            <>
                <div className="search">
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={"filter pictures..."}/>                     
                </div>
                <div className="photos">
                    {searchResults.map((picture) =>
                        <Image key={picture.id} picture={picture} />
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        newestPictures: state.newestPictures,
        pictures: state.pictures,
        topFivePictures: state.topFivePictures,
        filteredPictures: state.filteredPictures
    }
}

export default connect(mapStateToProps)(FilterPicturesContainer)