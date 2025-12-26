import React from 'react';
import svgPaths from "../imports/svg-b8sjovrdwf";

interface ArrowLeftProps {
  onClick: () => void;
}

export default function ArrowLeft({ onClick }: ArrowLeftProps) {
  return (
    <div 
      onClick={onClick} 
      className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer"
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="arrow-left">
            <path d={svgPaths.p2a5cd480} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          </g>
        </svg>
      </div>
    </div>
  );
}
