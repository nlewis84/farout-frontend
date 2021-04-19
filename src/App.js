import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PictureCardContainer from './containers/PictureCardContainer';
import AppTitle from './components/AppTitle';
import TopFivePictures from './components/TopFivePictures';
import NewestPictures from './components/NewestPictures';
import { fetchPictures } from './actions/fetchPictures';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPictures()
  }

  render() {
    // debugger
    return (
      <div className="App" >
        <div>
          <Link className="large-button" to="/vote">Vote</Link>
          <Link className="large-button" to="/top5">Top Five</Link>
          <Link className="large-button" to="/newest">Newest</Link>
        </div>
        <AppTitle />
        <Route path='/vote'>
          <div className="container">
            {this.props.pictures.map((picture, index) =>
              <PictureCardContainer key={index} picture={picture} />
            )}
          </div>
        </Route>
        <Route path='/top5'>

          <TopFivePictures />
        </Route>
        <Route path='/newest'>
          <div className="container">
            <NewestPictures />
          </div>
        </Route>
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

