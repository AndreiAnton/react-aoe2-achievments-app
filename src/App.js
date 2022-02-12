import React from 'react';
import Header from './components/Header';
import Heatmap from './components/Heatmap';
import Timeline from './components/Timeline/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Heatmap />
        <Timeline />
    </div>
  );
}

export default App;
