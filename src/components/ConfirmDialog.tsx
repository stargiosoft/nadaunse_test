import React from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

/**
 * 공통 확인 다이얼로그 컴포넌트
 * 
 * @param isOpen - 다이얼로그 표시 여부
 * @param title - 다이얼로그 제목
 * @param message - 다이얼로그 메시지 (선택사항)
 * @param onConfirm - 확인 버튼 클릭 시 실행될 함수
 * @param onCancel - 취소 버튼 클릭 시 실행될 함수
 * @param confirmText - 확인 버튼 텍스트 (기본값: '네')
 * @param cancelText - 취소 버튼 텍스트 (기본값: '아니요')
 */
export function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = '네',
  cancelText = '아니요'
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        onClick={onCancel}
      >
        {/* Dialog */}
        <div 
          className="relative rounded-[20px] w-[320px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
            {/* 제목 */}
            <div className="bg-white relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[28px] py-[32px] relative w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                    <p className="font-semibold leading-[25.5px] relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-full">
                      {title}
                    </p>
                    {message && (
                      <p className="font-normal leading-[20px] relative shrink-0 text-[15px] text-[#848484] tracking-[-0.3px] w-full">
                        {message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 버튼 그룹 */}
            <div className="bg-white relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-[24px] relative w-full">
                  <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
                    {/* 취소 버튼 */}
                    <button
                      onClick={onCancel}
                      className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0 bg-[#f3f3f3]"
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <p className="font-medium leading-[20px] relative shrink-0 text-[#525252] text-[15px] text-nowrap tracking-[-0.45px]">
                              {cancelText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* 확인 버튼 */}
                    <button
                      onClick={onConfirm}
                      className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0 bg-[#48b2af]"
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <p className="font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">
                              {confirmText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Border 레이어 (별도) */}
          <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
        </div>
      </div>
    </>
  );
}