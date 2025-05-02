// components/SecondaryButton.js
import React from 'react';

const SecondaryButton = ({ children, onClick, type = "button", className = "", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-white border border-[#EA580C] text-[#EA580C] hover:bg-[#fef4ed] font-semibold py-2 px-6 rounded-full transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default SecondaryButton;
