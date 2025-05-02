// components/PrimaryButton.js
import React from 'react';

const PrimaryButton = ({ children, onClick, type = "button", className = "", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-[#EA580C] hover:bg-[#cc4c09] text-white font-semibold py-2 px-6 rounded-full transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
