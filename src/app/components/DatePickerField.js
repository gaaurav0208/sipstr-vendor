'use client';
import React from 'react';

const DatePickerField = ({ label, name, value, onChange, error }) => {
  return (
    <div className="flex flex-col mb-4 w-xs">
      <label className="font-semibold mb-1">{label}</label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

    </div>
  );
};

export default DatePickerField;
