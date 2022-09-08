import React, { useEffect, useState } from 'react';
// import './Screen4.css';
// import {BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Screen4 = ({ name, avatar, mode, pojam, setPojam, setKategorija, setUzrast }) => {
  // function butt1() {
  //   document.querySelector('.butt1').style.background = '#DB5141';
  //   document.querySelector('.butt2').style.background = 'white';
  // }

  // function butt2() {
  //   document.querySelector('.butt2').style.background = '#DB5141';
  //   document.querySelector('.butt1').style.background = 'white';
  // }

  // const [modal, setModal] = useState(false);
  // const [modalStyle, setModalStyle] = useState(1);
  // setModal(!modal);
  // let sli1 = document.getElementById('brain');
  // let sli2 = document.getElementById('brain2');
  // let sli3 = document.getElementById('button3');
  // let br1 = document.getElementById('brar1');
  // let br2 = document.getElementById('brar2');
  // let br3 = document.getElementById('brar3');
  // if ((avatar = 'Detektiv Mozgon')) {
  //   // document.getElementById('brar1').style.display = 'flex';
  //   // document.getElementById('brar2').style.display = 'none';
  //   // document.getElementById('brar3').style.display = 'none';
  //   setModalStyle(0);
  // } else if ((avatar = 'Knjiško Sveznalić')) {
  //   // document.getElementById('brar1').style.display = 'none';
  //   // document.getElementById('brar2').style.display = 'flex';
  //   // document.getElementById('brar3').style.display = 'none';
  //   setModalStyle(1);
  // } else if ((avatar = 'Narednik Strožilo')) {
  //   // document.getElementById('brar1').style.display = 'none';
  //   // document.getElementById('brar2').style.display = 'none';
  //   // document.getElementById('brar3').style.display = 'flex';
  //   setModalStyle(2);
  // }
  const [img, setImg] = useState('');

  useEffect(() => {
    if (avatar === 'Detektiv Mozgon') {
      setImg('/assets/images/mozgo 2-05 1.png');
    } else if (avatar === 'Knjiško Sveznalić') {
      setImg('/assets/images/mozgo-06 1.png');
    } else {
      setImg('');
    }
  }, []);
  // let img1 = '/assets/images/mozgo 2-05 1.png';
  // let img2 = '/assets/images/mozgo-06 1.png';
  // let img3 = '';

  return (
    <div>
      <div className="ever">
        <Link to="/n3">
          <img className="arrow" width="10px" height="15px" src="/assets/images/Vector.png" alt="" />
        </Link>
        {/* {modal && (
          <div>
            {modalStyle === 0 ? <img className="bra" id="bran1" src="/assets/images/mozgo 2-05 1.png" alt="" /> : null}
            {modalStyle === 1 ? <img className="bra" id="bran2" src="/assets/images/mozgo-06 1.png" alt="" /> : null}
            {modalStyle === 2 ? <div className="backbra" id="bran3"></div> : null}
          </div>
        )} */}

        {img === '/assets/images/mozgo 2-05 1.png' ? (
          <img src="/assets/images/mozgo 2-05 1.png" style={{ background: 'gray', borderRadius: '2.5rem' }} className="bra" alt="" />
        ) : null}
        {img === '/assets/images/mozgo-06 1.png' ? (
          <img src="/assets/images/mozgo-06 1.png" style={{ background: 'gray', borderRadius: '2.5rem' }} className="bra" alt="" />
        ) : null}
        {img === '' ? <div className="backbra" id="bran3"></div> : null}
        <h1 className="pojam">POJAM SE VIDI NA EKRANU: {name}</h1>
        <div className="ses">
          <button
            id="button1"
            // onClick={butt1}
            style={{
              background: pojam === 'DA' ? '#DB5141' : 'white',
            }}
            className="butt1"
            onPointerDown={() => {
              setPojam('DA');
            }}
          >
            DA
          </button>
          <button
            id="button2"
            // onClick={butt2}
            className="butt2"
            style={{
              background: pojam === 'NE' ? '#DB5141' : 'white',
            }}
            onPointerDown={() => {
              setPojam('NE');
            }}
          >
            NE
          </button>
        </div>
        <hr className="line1" />
        <h1 className="uzr">UZRAST</h1>

        <select
          className="god"
          onChange={e => {
            setUzrast(e.target.value);
          }}
        >
          <option value="1">1 GODINU</option>
          <option value="2">2 GODINE</option>
          <option value="3">3 GODINE</option>
          <option value="4">4 GODINE</option>
          <option value="5">5 GODINA</option>
          <option value="6">6 GODINA</option>
          <option value="7">7 GODINA</option>
          <option value="8">8 GODINA</option>
          <option value="9">9 GODINA</option>
          <option value="10">10 GODINA</option>
          <option value="11+">11+ GODINA</option>
        </select>
        <hr className="line2" />
        <h1 className="kat">KATEGORIJA</h1>
        <select
          className="normal"
          onChange={e => {
            setKategorija(e.target.value);
          }}
        >
          <option value="lako">lako</option>
          <option value="normalno">normalno</option>
          <option value="teško">teško</option>
        </select>

        <button className="startt">POČNI IGRU</button>
      </div>
    </div>
  );
};

export default Screen4;
