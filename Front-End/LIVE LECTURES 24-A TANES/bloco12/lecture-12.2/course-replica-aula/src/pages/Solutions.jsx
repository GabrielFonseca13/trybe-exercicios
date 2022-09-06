import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fakeFetchSolutions } from '../fake-fetch';

export default class Solutions extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await fakeFetchSolutions();
    const object = await response.json();

    this.setState({ data: object.results });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>GABARITO</h1>
        <ul>
          {data.map((solution) => (
            <li key={ solution.lecture }>
              <Link to={ `/solutions/${solution.lecture}` }>{solution.name}</Link>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
