import React from 'react';
import './App.css';
import Searchphotos from './Searchphotos';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>React Photo Search</h1><span><button className='btn'>bookmark</button></span>
        <Searchphotos />
      </div>
    </div>
  );
}

export default App;
