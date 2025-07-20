import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [mode, setMode] = useState('');
  const [pojam, setPojam] = useState('DA');
  const [uzrast, setUzrast] = useState('1');
  const [kategorija, setKategorija] = useState('lako');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="n2" element={<Screen2 mode={mode} setMode={setMode} />} />
          <Route path="n3" element={<Screen3 name={name} setName={setName} avatar={avatar} setAvatar={setAvatar} mode={mode} />} />
          <Route
            path="n4"
            element={
              <Screen4
                name={name}
                pojam={pojam}
                avatar={avatar}
                kategorija={kategorija}
                uzrast={uzrast}
                mode={mode}
                setPojam={setPojam}
                setKategorija={setKategorija}
                setUzrast={setUzrast}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
