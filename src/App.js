import './App.css';
import React from 'react';
import AppTitle from './components/AppTitle';
import AppTagline from './components/AppTagline';
import TopFivePictures from './containers/TopFivePictures';
import NewestPictures from './containers/NewestPictures';
import VotePictures from './containers/VotePictures';
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
        </div>
        <AppTitle />
        <AppTagline />
        <Route path='/vote' component={VotePictures} />
        <Route path='/top5' component={TopFivePictures} />
        <Route path='/newest' component={NewestPictures} />
      </div>
    );
  }
}

export default App;

