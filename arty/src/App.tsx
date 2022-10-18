import React from 'react';
import Carousel from './components/Carousel';
import Title from './components/Title';
import NavigationBar from './components/NavigationBar';
import logo from './assets/img/logo-museum.png';

import './App.scss'

function App() {
  return (
    <div className="App">
      <div>
        <NavigationBar logo={logo} descriptionLogo="logo of museum" firstMenuLink="Interscindit"
         secondMenuLink="minutis" thirdMenuLink="Calycadnus" 
        />
        <Title title="Title of website" />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
