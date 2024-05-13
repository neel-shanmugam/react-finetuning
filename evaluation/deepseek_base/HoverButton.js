import React from 'react';

const HoverButton = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => {
        document.body.style.backgroundColor = 'red';
      }}
      onMouseLeave={() => {
        document.body.style.backgroundColor = 'blue';
      }}
    >
      {children}
    </button>
  );
};

export default HoverButton;