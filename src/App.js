import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PictureCardContainer from './containers/PictureCardContainer';
import AppTitle from './components/AppTitle';
import { fetchPictures } from './actions/fetchPictures'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPictures()
  }

  render() {
    // debugger
    return (
      <div className="App" >
        <AppTitle />
        {/* <h1 id="title">FAR OUT</h1> */}
        <div className="container">
          {this.props.pictures.map((picture, index) =>
            <PictureCardContainer key={index} picture={picture} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, { fetchPictures })(App)

