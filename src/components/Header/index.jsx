import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = (props) => {
  const { event } = props;
  return (
    <header className="app_header">
      <input
        onChange={(e) => event(e.target.value)}
        placeholder="filter by name"
      />
    </header>
  );
};

Header.propTypes = {
  event: PropTypes.func.isRequired,
};

export default Header;
