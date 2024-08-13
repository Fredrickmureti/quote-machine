import React, { useEffect, useState } from "react";
import QuoteBox from './components/QuoteBox';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleNewQuote = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };

  useEffect(() => {
    handleNewQuote(); // Initialize with a random color on the first load
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <QuoteBox onNewQuote={handleNewQuote} bgColor={bgColor} />
    </div>
  );
}

export default App;
