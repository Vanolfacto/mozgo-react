import React from 'react';
import './style.css';
// import {BrowserRouter as  Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Screen1 = () => {
  return (
    <div className="kont1">
      <h1 className="titl">IGRA ZNANJA I POGAĐANJA</h1>
      <div className="glow"></div>
      <img src="/assets/mozgo.png" alt="" className="brain" width="200px" height="187.86px" />
      <Link to="/n2" className="subs">
        <button className="start">START</button>{' '}
      </Link>
    </div>
  );
};

export default Screen1;