import React, { useState } from 'react';
import './App.css';
import fortunes from './fortunes.json'; // Archivo con mensajes

function App() {
  const [fortune, setFortune] = useState("");

  const generateFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Cookies Fortune</h1>
      <p>{fortune || "Haz clic para recibir tu fortuna"}</p>
      <button onClick={generateFortune}>Generar Fortuna</button>
    </div>
  );
}

export default App;
