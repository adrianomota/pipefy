import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import Global from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes />
        <Global />
        <Header />
        <Board />
      </Router>
    </DndProvider>
  );
}

export default App;
