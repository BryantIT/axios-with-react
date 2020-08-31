import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonList />
      </header>
    </div>
  );
}

export default App;
