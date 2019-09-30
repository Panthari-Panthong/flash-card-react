import React from 'react';
import './App.css';
import FlashCard from './components/FlashCard';

function App() {
  return (
    <div className="App">
      <h1>FlashCard Game</h1>
      <FlashCard question="Highest point of a wave" answer="Crest" />
      <FlashCard question="Lowest point of a wave" answer="Trough" />
      <FlashCard question="Greatness of size; fullness; breadth of range" answer="Amplitude" />
      <FlashCard question="Horizontal distance between the crests or between the troughs of two adjacent waves" answer="Wavelength" />
      <FlashCard question="The number of complete wavelengths that pass a point in a given time" answer="Doppler Effect" />

    </div>
  );
}

export default App;
