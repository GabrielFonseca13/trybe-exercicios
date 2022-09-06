import React from 'react';

import TrybeLogo from '../assets/logo.svg';
import ToggleButtonImage from '../assets/list.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
          <img src={ ToggleButtonImage } alt="Toggle sidebar button" />
        </button>
        <img src={ TrybeLogo } alt="Trybe Logo" />
        <h4>Trybe - Turma 24</h4>
      </header>
    );
  }
}

export default Header;
