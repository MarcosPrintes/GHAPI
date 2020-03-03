import React, { useEffect, useState, useRef } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Api from './service/api';
import Header from './components/Header';
import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './views/Home';

function App() {
  const infinteScrolldiv = useRef();
  const [term, setTerm] = useState(null);
  const [scrollRatio, setScrollRatio] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const findRepositories = () => {
    setLoading(true);
    Api.getData(term, page).then(({ data }) => {
      const newRepositories = [...repositories];
      newRepositories.push(...data.items);
      setRepositories(newRepositories);
      setLoading(false);
    });
  };

  const intersectionObserver = new IntersectionObserver((entries) => {
    const ratio = entries[0].intersectionRatio;
    setScrollRatio(ratio);
  });

  // useEffect(() => { findRepositories(); }, []);

  useEffect(() => {
    intersectionObserver.observe(infinteScrolldiv.current);
    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    if (scrollRatio > 0) {
      setPage(page + 1);
    }
  }, [scrollRatio]);

  useEffect(() => {
    console.log('exec')
    findRepositories();
  }, [page]);

  useEffect(() => {
    setPage(0);
    setRepositories([]);
    findRepositories();
  }, [term]);


  const filter = (text) => {
    const repos = repositories.filter((el) => el.full_name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    setRepositories(repos);
  };

  return (
    <div className="App">
      <Header event={(value) => filter(value)} />
      <Sidebar event={(value) => setTerm(value)} />
      <Home repositories={repositories} />
      <div ref={infinteScrolldiv} />
      { loading ? <div className="load"><CircularProgress /></div> : null}
    </div>
  );
}

export default App;
