import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import Global from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Router>
        <Routes />
        <Global />
        <Header />
        <Board />
      </Router>
    </>
  );
}

export default App;
