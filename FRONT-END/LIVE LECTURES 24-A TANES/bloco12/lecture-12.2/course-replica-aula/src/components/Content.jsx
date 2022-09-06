import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';
import SolutionItem from '../pages/SolutionItem';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

// import PropTypes from 'prop-types';

export default class Content extends Component {
  render() {
    return (
      <main className="Content">
        É o conteúdo que vai mudar
        <Switch>
          <Route exact path="/calendar" component={ Calendar } />
          <Route exact path="/live-lectures" component={ LiveLectures } />
          <Route exact path="/trybe-talks" component={ TrybeTalks } />
          <Route exact path="/solutions" component={ Solutions } />
          <Route exact path="/solutions/:id" component={ SolutionItem } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}
