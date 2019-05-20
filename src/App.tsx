import React from 'react';
import './App.css';

import Test from './components/Test';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Hello, world!
      </header>
      <Test />
    </div>
  );
}

export default App;
