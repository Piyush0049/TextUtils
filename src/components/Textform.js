import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Textform(props) {
  const [text, settext] = useState('');
  const handlechange = (event) => {
    settext(event.target.value);
  };

  const upper = () => {
    let x = text.toUpperCase();
    settext(x);
  };

  const word = text.split(' ');

  const clear = () => {
    settext('');
  };

  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [buttntext, setbuttntext] = useState('Dark Mode OFF');

  const toggle = () => {
    if (buttntext === 'Dark Mode ON') {
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setbuttntext('Dark Mode OFF');
      document.body.style.backgroundColor = 'white';
    } else {
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setbuttntext('Dark Mode ON');
      document.body.style.backgroundColor = '#0a2329';
    }
  };

  return (
    <>
    <div class="form-check form-switch" style={{ position: 'fixed', left: '89%', color: mystyle.color }}>
  <input class="form-check-input" type="checkbox" role="switch" 
         onClick={() => {
          props.toggle();
          toggle();
        }} id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{buttntext}</label>
</div>
      
      <div className="container mt-1 my-8">
        <h3 
          style={{color: mystyle.color }}>{props.heading}</h3>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handlechange}
          style={{ backgroundColor: mystyle.backgroundColor, color: mystyle.color }}
        ></textarea>
        <button type="button" className="btn btn-success mt-4" onClick={upper}>
          To UpperCase
        </button>
        <button type="button" className="btn btn-danger mt-4 mx-3" onClick={clear}>
          Clear all
        </button>
      </div>
      <div className="container my-9" 
          style={{color: mystyle.color }}>
        <h2>The Text Summary is : </h2>
        <p>
          Total characters are : {text.length} <br /> Total number of words are : {word.length - 1}
        </p>
        <h3>Preview of the input text : </h3>
        <h6>{text}</h6>
      </div>
    </>
  );
}

