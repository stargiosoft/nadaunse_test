import React from 'react';

interface CheckboxIconProps {
  checked: boolean;
  size?: number;
}

export default function CheckboxIcon({ checked, size = 28 }: CheckboxIconProps) {
  return (
    <div 
      className={`relative rounded-[8px] shrink-0 ${checked ? 'bg-[#48b2af] border-none' : 'bg-white border-2 border-[#e7e7e7] border-solid'}`}
      style={{ width: size, height: size }}
    >
      {checked && (
        <svg 
          className="absolute inset-0 m-auto text-white" 
          width={size * 0.57} 
          height={size * 0.57}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}
