import React from 'react';
// import './Screen2.css';
// import {BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Screen2 = ({ mode, setMode }) => {
  return (
    <div className="kont2">
      <h1>CHOOSE MODE:</h1>

      <Link to="/n3" className="bitch">
        {' '}
        <img
          className="cloud"
          src="/assets/images/Group 1.png"
          onPointerDown={() => {
            setMode('Singleplayer');
          }}
          alt=""
        />
      </Link>

      <h1 className="sin">SINGLE PLAYER</h1>

      <Link className="bitch2" to="/n3">
        <div
          className="squaret"
          onPointerDown={() => {
            setMode('Multiplayer');
          }}
        ></div>
      </Link>

      <h1 className="mul">MULTIPLAYER</h1>
    </div>
  );
};

export default Screen2;
