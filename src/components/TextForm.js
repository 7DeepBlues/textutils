import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log('uppercase was clicked');
    setText(text.toUpperCase());
  };
  const handleLoclick = () => {
    // console.log('uppercase was clicked');
    setText(text.toLowerCase());
  };
  const handleCleartext = () => {
    setText('');
  };
  const handleOnChange = (event) => {
    // console.log('onchange was clicked');
    setText(event.target.value);
  };
  const handleCopy = () => {
    let selection = document.getElementById('myBox');
    navigator.clipboard.writeText(selection.value);
  };

  const [text, setText] = useState('Enter text here');
  // setText('kdsfxdf');
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='myBox'
            rows='12'
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleCleartext}>
          Clear editor
        </button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').length} words {text.length} characters
        </p>
        <p>{text.split(' ').length * 0.008 * 60} seconds to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
