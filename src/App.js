import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PictureCardContainer from './containers/PictureCardContainer';
import { fetchPictures } from './actions/fetchPictures'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPictures()
  }

  render() {
    // if (!this.props.pictures.length) {
    //   return (
    //     <div className="App" >
    //       <h1>FAR OUT</h1>
    //       <h2>Loading...</h2>
    //     </div>
    //   )
    // } else {
    // debugger
    return (
      <div className="App" >
        <h1>FAR OUT</h1>
        <div>
          {this.props.pictures.map((picture, index) =>
            <PictureCardContainer key={index} picture={picture} />
          )}
        </div>
      </div>
    );
  }
  // }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, { fetchPictures })(App)

