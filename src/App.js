import React from 'react';
import Header from './components/Header';
import HeatmapContainer from './components/Heatmap/HeatmapContainer';
import Timeline from './components/Timeline/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <HeatmapContainer />
        <Timeline />
    </div>
  );
}

export default App;
