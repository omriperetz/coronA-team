import React, { Component } from 'react';

import Countdown from './Countdown';

import './App.css';
import Loader from './Loader';

import img2 from '../public/corona-virus.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <img src={img2} className="corona-virus-logo" />
          <Loader />
          <Countdown />
        </div>
        <div className="footer">
          &copy; omriperetz
        </div>
      </div>
    );
  }
}

export default App;
