import React from "react";

class Home extends React.Component{
  state = {
    userName: 'Tryber',
    role: 'Admin',
  };


  render() {
    const { history } = this.props;
    return(
      <div>
        <h1>Home Page</h1>
        <button
          type="button"
          onClick={ () => history.push('/welcome', this.state) }
        >
          Acesse a Página de boas vindas
        </button>
      </div>
    );
  }
}

export default Home;
