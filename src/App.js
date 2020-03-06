// orri

import React, { Component } from 'react';
import moment from 'moment';

import './App.css';
import Loader from './Loader';

import img2 from '../public/corona-virus.jpeg';

class App extends Component {
  constructor(props) {
    super(props);

    let startTime = new Date();
    let endTime = new Date(2020, 2, 17, 2, 30).getTime();
    let diffTime = endTime - startTime;
    let duration = moment.duration(diffTime);

    this.state = {
      duration
    }

    this.tick = this.tick.bind(this);

    this.timer = setInterval(this.tick, 1000);
  }

  tick() {
    let {duration} = this.state;

    duration = moment.duration(duration - 1000);
    this.setState({duration});
  }

  initCountDown() {
    let startTime = new Date();
    let endTime = new Date(2020, 2, 17, 2, 30).getTime();
    let diffTime = endTime - startTime;
    let duration = moment.duration(diffTime);

    setInterval(function(){
      duration = moment.duration(duration - 1000);

      let text = duration.days() + ":" + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
      console.log(text);
    }, 1000);
  }

  render() {
    const {duration} = this.state;

    let days = duration.days();
    let hours = duration.hours();
    let minutes = duration.minutes();
    let seconds = duration.seconds();

    return (
      <div className="App">
        <div className="Main">
          <img src={img2} className="corona-virus-logo" />
          <Loader />
          <div className="countdown">
            <div className="days">
              <div className="value">{days}</div>
              <div className="label">days</div>
            </div>
            <div className="dotdot">:</div>
            <div className="hours">
              <div className="value">{hours}</div>
              <div className="label">hours</div>
            </div>
            <div className="dotdot">:</div>
            <div className="minutes">
              <div className="value">{minutes}</div>
              <div className="label">minutes</div>
            </div>
            <div className="dotdot">:</div>
            <div className="seconds">
              <div className="value">{seconds}</div>
              <div className="label">seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
