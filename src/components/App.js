import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Contents from './Contents'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <Contents />
    </div>
  )
}

export default App
