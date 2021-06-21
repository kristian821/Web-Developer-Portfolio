import React from 'react';
// import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
