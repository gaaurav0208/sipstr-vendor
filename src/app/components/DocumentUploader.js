'use client';
import React, { useRef } from 'react';
import PrimaryButton from './PrimaryButton';

const DocumentUploader = ({ label, onChange }) => {
  const fileInputRef = useRef();

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="font-semibold mb-2">{label}</label>

      <div className="flex items-center gap-4">
        <PrimaryButton
          type="button"
          onClick={handleBrowseClick}
        >
          Browse
        </PrimaryButton>
        <span className="text-sm text-gray-600">
          {fileInputRef.current?.files[0]?.name || 'No file selected'}
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,image/*"
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

export default DocumentUploader;
