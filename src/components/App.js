import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Contents from './Contents'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-devide">
        <Sidebar />
        <Contents />
      </div>
    </div>
  );
}

export default App
