import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Card = (props) => {
  const {
    name,
    stars,
    avatar,
    url,
  } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="app_card">
      <div className="app_card_avatar">
        <img src={avatar} alt="user avatar" />
      </div>

      <p>{name}</p>
      <ul>
        <li>
          <span>
            *
            {stars}
          </span>
        </li>
      </ul>
    </a>
  );
};

Card.propTypes = {
  // eslint-disable-next-line react/require-default-props
  avatar: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  stars: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  url: PropTypes.number,
};

export default Card;
