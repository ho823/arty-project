import React from 'react';
import Carousel from './components/Carousel';
import Title from './components/Title';

import './App.scss'

function App() {
  return (
    <div className="App">
      <div>
        <Title title="Title of website" />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
