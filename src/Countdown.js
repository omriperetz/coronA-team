import React, { Component } from 'react';
import moment from 'moment';

function padToTwo(number) {
  if (number<=99) { number = ("0"+number).slice(-2); }
  return number;
}

export default class Countdown extends Component {
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

  render() {
    const {duration} = this.state;

    let days = padToTwo(duration.days());
    let hours = padToTwo(duration.hours());
    let minutes = padToTwo(duration.minutes());
    let seconds = padToTwo(duration.seconds());

    return (
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
    )
  }
}