import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PictureCardContainer from './containers/PictureCardContainer';
import AppTitle from './components/AppTitle';
import { fetchPictures } from './actions/fetchPictures';
import { Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPictures()
  }

  render() {
    // debugger
    return (
      <div className="App" >
        <AppTitle />
        <Route path='/vote'>
          <div className="container">
            {this.props.pictures.map((picture, index) =>
              <PictureCardContainer key={index} picture={picture} />
            )}
          </div>
        </Route>
        <Route path='/best'></Route>
        <Route path='/newest'></Route>
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

