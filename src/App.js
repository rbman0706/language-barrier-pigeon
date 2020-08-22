import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Display from './components/Display/Display';
import Textinput from './components/Textinput/Textinput';

function App() {
  return (
    <div className="App">
      <Home/>
      <Textinput/>
      <Display/>
    </div>
  );
}

export default App;
