import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import GridRepos from './components/gridRepos/gridRepos';
import HeaderComponent from './components/header/header';

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderComponent></HeaderComponent>
        <GridRepos></GridRepos>
      </Container>
    </div>
  );
}

export default App;
