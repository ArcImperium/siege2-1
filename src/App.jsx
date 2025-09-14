import React, {useState, useEffect} from 'react';
import './App.css';
import Hexbox from './Hexbox.jsx';

const getHex = () => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6,'0')}`;
};

function App() {
  useEffect (() => {
    document.title = "Colo(u)rs";
  }, []);

  const [hexColor, setHexColor] = useState(getHex());
    
  const handleHex = () => {
    setHexColor(getHex());
  };

  return(
    <>
      <Hexbox Hexcolor={hexColor}/>
      <h2></h2>
      <button onClick={handleHex}>New Color</button>
    </>
  );
};

export default App;