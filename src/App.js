import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import { fetchPictures } from './actions/fetchPictures'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPictures()
  }

  render() {
    return (
      <div className="App" >
        App
      </div>
    );
  }
}

export default connect(null, { fetchPictures })(App)

