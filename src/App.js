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
            {this.props.pictures.map((picture) =>
              <PictureCardContainer key={picture.id} picture={picture} />
            )}
          </div>
        </Route>
        <Route path='/top5' component={TopFivePictures} />
        <Route path='/newest' component={NewestPictures} />
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

