/**
 * 사주 정보 케밥 메뉴 드롭다운
 * Figma import: ButtonCategoryPopupButtons from 사주정보관리편집시.tsx
 */

import React, { useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-nykl32kbwr";

interface SajuKebabMenuProps {
  /** 드롭다운 표시 여부 */
  isOpen: boolean;
  /** 드롭다운 위치 (케밥 버튼 좌표) */
  position: { top: number; left: number };
  /** 본인 사주 여부 (false면 삭제 버튼 표시) */
  isOwnerSaju: boolean;
  /** 정보 수정 클릭 핸들러 */
  onEdit: () => void;
  /** 정보 삭제 클릭 핸들러 */
  onDelete: () => void;
  /** 드롭다운 닫기 핸들러 */
  onClose: () => void;
}

export function SajuKebabMenu({
  isOpen,
  position,
  isOwnerSaju,
  onEdit,
  onDelete,
  onClose,
}: SajuKebabMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // 디버깅 정보 출력
  useEffect(() => {
    if (isOpen) {
      console.log('🍔 [케밥메뉴] 열림:', { position, isOwnerSaju });
    }
  }, [isOpen, position, isOwnerSaju]);

  // 외부 클릭 감지
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay (투명) */}
      <div 
        className="fixed inset-0 z-[50]"
        onClick={onClose}
      />

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className="fixed bg-white content-stretch flex flex-col gap-[12px] items-center justify-center px-0 py-[16px] rounded-[16px] z-[51]"
        style={{
          top: `${position.top - 12}px`, // 케밥 버튼과 수직 중앙 정렬
          right: `${window.innerWidth - position.left + 8}px`, // 케밥 버튼 왼쪽에 8px 간격
        }}
      >
        <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)]" />

        {/* 정보 수정 버튼 */}
        <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-0 relative shrink-0 w-[160px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center size-full">
              <button
                onClick={() => {
                  onEdit();
                  onClose();
                }}
                className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full hover:bg-[#f9f9f9] transition-colors rounded-[12px]"
              >
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                  {/* 수정 아이콘 */}
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icons">
                        <path 
                          clipRule="evenodd" 
                          d={svgPaths.p1c4f0780} 
                          fill="#6D6D6D" 
                          fillRule="evenodd" 
                        />
                        <path 
                          d={svgPaths.p2b4bb800} 
                          fill="#6D6D6D" 
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="font-normal leading-[25.5px] relative shrink-0 text-[#6d6d6d] text-[15px] text-nowrap tracking-[-0.3px]">
                    정보 수정
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 정보 삭제 버튼 (본인 사주가 아닐 때만 표시) */}
        {!isOwnerSaju && (
          <>
            {/* Divider */}
            <div className="h-0 relative shrink-0 w-[160px]">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1">
                  <path d="M0 0.5H160" stroke="#F3F3F3" />
                </svg>
              </div>
            </div>

            {/* 삭제 버튼 */}
            <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-0 relative shrink-0 w-[160px]">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <button
                    onClick={() => {
                      onDelete();
                      onClose();
                    }}
                    className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full hover:bg-[#f9f9f9] transition-colors rounded-[12px]"
                  >
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      {/* 삭제 아이콘 */}
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Icons">
                            <path 
                              d={svgPaths.p89eb200} 
                              fill="#FA5B4A" 
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="font-normal leading-[25.5px] relative shrink-0 text-[#fa5b4a] text-[15px] text-nowrap tracking-[-0.3px]">
                        정보 삭제
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}