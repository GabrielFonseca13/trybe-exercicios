import React, { Component } from 'react';
import bip from '../assets/bip.mp3';

const ONE_SECOND = 1000;
const MAX_VALUE = 6;
class Timer extends Component {
  constructor() {
    super();
    console.log('constructor()');
  }

  state = {
    seconds: 1,
    phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
    phaseIndex: 0,
  }

  componentDidMount() {
    const audio = new Audio(bip);

    this.intervalId = setInterval(() => {
      audio.play();
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate() {
    // SE o estado de seconds for igual a 5
    // ENTÃO: troco de fase
    const { seconds } = this.state;
    if (seconds === MAX_VALUE) {
      this.setState((prevState) => ({
        seconds: 0,
        phaseIndex: prevState.phaseIndex === 2 ? 1 : prevState.phaseIndex + 1,
      }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { seconds, phases, phaseIndex } = this.state;
    console.log('render()');

    return (
      <section>
        <h1>{phases[phaseIndex]}</h1>
        <h2>{seconds}</h2>
      </section>
    );
  }
}

export default Timer;
