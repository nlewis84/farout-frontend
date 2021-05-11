import React from 'react';
import { connect } from 'react-redux';
import Image from '../components/Image';

class FilteredPicturesContainer extends React.Component {
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
        ...state,
        filteredPictures: state.filteredPictures
    }
}

export default connect(mapStateToProps)(FilteredPicturesContainer)