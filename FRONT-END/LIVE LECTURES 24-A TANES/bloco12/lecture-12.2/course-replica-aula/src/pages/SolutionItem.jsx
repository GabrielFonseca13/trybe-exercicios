import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fakeFetchSolutionsId } from '../fake-fetch';

class SolutionItem extends Component {
  constructor() {
    super();

    this.state = {
      exercises: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await fakeFetchSolutionsId(id);
    const obj = await result.json();

    this.setState({ exercises: obj.exercises });
  }

  didPressClick = () => {
    const { history } = this.props;
    history.push('/solutions');
  }

  render() {
    const { exercises } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        <button type="button" onClick={ this.didPressClick }>Voltar</button>
        Item do Gabarito:
        {' '}
        {id}
        <ul>
          {exercises.map((exercise) => <li key={ exercise }>{exercise}</li>)}
        </ul>
      </div>
    );
  }
}

SolutionItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SolutionItem;
