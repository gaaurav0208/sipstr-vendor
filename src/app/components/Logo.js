'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
const Logo = ({
  imageSrc,
  text = 'SipStr',
  href = '/',
  className = '',
  width = 180,
  height = 100,
}) => {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="Logo"
          width={width}
          height={height}
          priority
        />
      ) : (
        <div className="text-xl font-bold text-primary">{text}</div>
      )}
    </Link>
  );
};

export default Logo;
