import React from 'react';

const PrimaryText = ({ children, size = 'base', weight = 'normal', className = '' }) => {
    const sizeClasses = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
    };

    const weightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    };

    const finalClass = `${sizeClasses[size] || ''} ${weightClasses[weight] || ''} text-[#EA580C] ${className}`.trim();

    return <p className={finalClass}>{children}</p>;
};

export default PrimaryText;
