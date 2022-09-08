import React, { useState } from 'react';
// import './Screen3.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {BrowserRouter as  Link } from 'react-router-dom';

const Screen3 = ({ name, setName, avatar, setAvatar, mode }) => {
  const [modal, setModal] = useState(false);
  const [modalStyle, setModalStyle] = useState(1);

  const toggleModal = arg => {
    setModal(!modal);
    // let sli1 = document.getElementById('brain');
    // let sli2 = document.getElementById('brain2');
    // let sli3 = document.getElementById('button3');
    // let br1 = document.getElementById('brar1');
    // let br2 = document.getElementById('brar2');
    // let br3 = document.getElementById('brar3');
    if (arg === 0) {
      // document.getElementById('brar1').style.display = 'flex';
      // document.getElementById('brar2').style.display = 'none';
      // document.getElementById('brar3').style.display = 'none';
      setModalStyle(0);
    } else if (arg === 1) {
      // document.getElementById('brar1').style.display = 'none';
      // document.getElementById('brar2').style.display = 'flex';
      // document.getElementById('brar3').style.display = 'none';
      setModalStyle(1);
    } else if (arg === 2) {
      // document.getElementById('brar1').style.display = 'none';
      // document.getElementById('brar2').style.display = 'none';
      // document.getElementById('brar3').style.display = 'flex';
      setModalStyle(2);
    }
    console.log(arg);
  };
  let navigate = useNavigate();

  const goHome = () => {
    if (name === '') {
      return alert('Obavezno je ime');
    }
    if (modalStyle === 0) {
      setAvatar('Detektiv Mozgon');
      navigate('/n4');
    } else if (modalStyle === 1) {
      setAvatar('Knjiško Sveznalić');
      navigate('/n4');
    } else if (modalStyle === 2) {
      setAvatar('Narednik Strožilo');
      navigate('/n4');
    }
  };

  return (
    <div>
      <div>
        <div className="ev">
          <Link to="/n2">
            <img className="arrow" width="10px" height="15px" src="/assets/images/Vector.png" alt="" />
          </Link>
          <h1 className="title">IZABERI SVOG AVATARA:</h1>
          <div className="back1" id="button" onPointerDown={() => toggleModal(0)}>
            <img className="brain1" id="brain" src="/assets/images/mozgo 2-05 1.png" alt="" />
          </div>

          <h1 className="det">DETEKTIV MOZGON</h1>
          <div className="back2" id="button2" onPointerDown={() => toggleModal(1)}>
            <img className="brain2" id="brain2" src="/assets/images/mozgo-06 1.png" alt="" />
          </div>
          <h1 className="book">KNJIŠKO SVEZNALIĆ</h1>
          <div id="button3" className="back3" onPointerDown={() => toggleModal(2)}></div>
          <h1 className="may">NAREDNIK STROŽILO</h1>
        </div>
      </div>
      {modal && (
        <div className="popup">
          <div className="popupwindow">
            <img className="arrowwindow" id="brar1" src="/assets/images/Vector.png" alt="" onPointerDown={toggleModal} />
            {modalStyle === 0 ? <img className="brain1window" id="brar2" src="/assets/images/mozgo 2-05 1.png" alt="" /> : null}
            {modalStyle === 1 ? <img className="brain2window" id="brar3" src="/assets/images/mozgo-06 1.png" alt="" /> : null}
            {modalStyle === 2 ? <div className="back3window"></div> : null}
            <input
              type="text"
              className="name"
              name="name1"
              id="name1"
              placeholder="IME"
              onChange={e => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
            />
            {/* <button id="butt1" onClick={newpage1} className="go" onclick="newpage1()">
              NASTAVI
            </button> */}
            {/* {name === '' ? null : ( */}{' '}
            <button id="butt1" className="go" onPointerDown={goHome}>
              NASTAVI
            </button>
            {/* )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen3;
