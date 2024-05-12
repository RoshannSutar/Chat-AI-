import React from 'react';
import './CustomButton.css'; // Import CSS file for button styles

const CustomButton = ({ onClick, children }) => {
  return (
    <button  onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
