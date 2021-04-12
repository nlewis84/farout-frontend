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
    return (
      <div className="App" >
        App
        <PictureCardContainer picture={this.props.pictures[0]} />
        <PictureCardContainer picture={this.props.pictures[1]} />
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

