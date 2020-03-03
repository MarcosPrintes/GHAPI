import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import './home.scss';

const Home = (props) => {
  const { repositories } = props;
  return (
    <div className="app_home">
      {
        repositories && repositories.map((el) => (
          <Card
            avatar={el.owner.avatar_url}
            key={el.owner.full_name}
            name={el.full_name}
            stars={el.stargazers_count}
            url={el.html_url}
          />
        ))
     }
    </div>
  );
};
Home.propTypes = {
  repositories: PropTypes.isRequired,
};

export default Home;
