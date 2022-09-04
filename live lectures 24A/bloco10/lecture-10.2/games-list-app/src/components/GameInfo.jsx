import React from 'react';
import PropTypes from 'prop-types';
import './GameInfo.css';

class GameInfo extends React.Component {
  render() {
    // console.log(this.props);
    const { id, title, developer, sales, img } = this.props.gameInfo;
    return (
      <section className='gamelist-section'>
        <div>
          <span>
            <strong>Id:</strong> {id}
          </span>
          <span>
            <strong>Titulo:</strong> {title}
          </span>
          <span>
            <strong>Developer:</strong> {developer}
          </span>
          <span>
            <strong>Sales:</strong> {sales}
          </span>
        </div>
        <img src={img} alt={title} />
      </section>
    );
  }
}

GameInfo.propTypes = {
  gameInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number,
    img: PropTypes.string,
  }),
}
export default GameInfo;
