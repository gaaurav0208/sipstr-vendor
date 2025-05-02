'use client';
import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default InputField;
