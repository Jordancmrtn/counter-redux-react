import React from 'react';
import './App.css';
import LightContainer from './LightContainer'
import CounterContainer from './CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <CounterContainer />
      </header>
    </div>
  );
}

export default App;
