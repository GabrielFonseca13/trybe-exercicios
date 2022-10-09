import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
  state = {
    persons: [],
    loading: true,
  };
  
  componentDidMount() {
    this.fetchPerson();
  }
  
  fetchPerson = () => {
    fetch('https://api.randomuser.me/ ')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        persons: data.results,
        loading: false,
      });
    });
  };

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { persons, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <PersonCard person={this.getUserElements(persons[0])} />
      </div>
    );
  }
}
export default PersonDetails;
