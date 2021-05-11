import './App.css';
import React from 'react';
import AppTitle from './components/AppTitle';
import AppTagline from './components/AppTagline';
import TopFivePicturesContainer from './containers/TopFivePicturesContainer';
import NewestPicturesContainer from './containers/NewestPicturesContainer';
import VotePicturesContainer from './containers/VotePicturesContainer';
import FilteredPicturesContainer from './containers/FilteredPicturesContainer';

import { Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    // debugger
    return (
      <div className="App" >
        <div>
          <Link className="large-button" to="/vote">Vote</Link>
          <Link className="large-button" to="/top5">Top Five</Link>
          <Link className="large-button" to="/newest">Newest</Link>
          <Link className="large-button" to="/filter">Filter</Link>
        </div>
        <AppTitle />
        <AppTagline />
        <Route path='/vote' component={VotePicturesContainer} />
        <Route path='/top5' component={TopFivePicturesContainer} />
        <Route path='/newest' component={NewestPicturesContainer} />
        <Route path='/filter' component={FilteredPicturesContainer} />
      </div>
    );
  }
}

export default App;

