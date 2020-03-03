import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Sidebar = (props) => {
  const { event } = props;
  return (
    <div className="app_sidebar">
      <div>
        {/* <input placeholder="filter" /> */}
        <ul>
          <li><button type="button" onClick={() => event('Javascript')}>Javascript</button></li>
          <li><button type="button" onClick={() => event('Java')}>Java</button></li>
          <li><button type="button" onClick={() => event('Python')}>Python</button></li>
          <li><button type="button" onClick={() => event('GoLang')}>GoLang</button></li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  event: PropTypes.func.isRequired,
}

export default Sidebar;
