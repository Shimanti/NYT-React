import React from 'react';
import buttonStyle from './button.css';

// * currentBookType can be "NonFiction" or "Fiction"
// * we also pass down a function through "handleClick" from a parent component
const Button = ({ currentBookType, handleClick }) => {
  return (
    <div className={buttonStyle}>
      <button onClick={handleClick} className="button-40">
        Click for {currentBookType}
      </button>
    </div>
  );
};

export default Button;
