/**
 * 쿠폰 선택 바텀시트
 * 
 * @description
 * - 결제 페이지에서 "쿠폰 내역보기" 클릭 시 표시
 * - 사용 가능한 쿠폰 목록과 "적용 안 함" 옵션 제공
 * - 라디오 버튼으로 단일 선택
 * 
 * @props
 * - isOpen: boolean - 바텀시트 표시 여부
 * - availableCoupons: UserCoupon[] - 사용 가능한 쿠폰 목록
 * - selectedCouponId: string | null - 현재 선택된 쿠폰 ID
 * - onSelectCoupon: (couponId: string | null) => void - 쿠폰 선택 핸들러
 * - onClose: () => void - 바텀시트 닫기
 */

import React, { useEffect } from 'react';

interface UserCoupon {
  id: string;
  name: string;
  discount_amount: number;
  description: string;
  issued_at: string;
}

interface CouponBottomSheetProps {
  isOpen: boolean;
  availableCoupons: UserCoupon[];
  selectedCouponId: string | null;
  onSelectCoupon: (couponId: string | null) => void;
  onClose: () => void;
}

export default function CouponBottomSheet({
  isOpen,
  availableCoupons,
  selectedCouponId,
  onSelectCoupon,
  onClose,
}: CouponBottomSheetProps) {
  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleApply = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[24px] max-w-[390px] mx-auto animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center pt-[12px] pb-[8px]">
          <div className="w-[40px] h-[4px] bg-[#E0E0E0] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-[20px] pt-[8px] pb-[16px]">
          <h2 className="text-center">쿠폰 선택</h2>
        </div>

        {/* Coupon List */}
        <div className="px-[20px] pb-[20px] max-h-[400px] overflow-y-auto">
          {/* 적용 안 함 옵션 */}
          <div
            className="flex items-center gap-[12px] p-[16px] border border-[#F0F0F0] rounded-[12px] mb-[12px] cursor-pointer hover:bg-[#F9F9F9]"
            onClick={() => onSelectCoupon(null)}
          >
            <div className="flex items-center justify-center w-[20px] h-[20px] border-2 border-[#D0D0D0] rounded-full shrink-0">
              {selectedCouponId === null && (
                <div className="w-[12px] h-[12px] bg-[#3FB5B3] rounded-full" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-[#151515]">적용 안 함</p>
            </div>
          </div>

          {/* 쿠폰 목록 */}
          {availableCoupons.length === 0 ? (
            <div className="text-center text-[#B7B7B7] py-[40px]">
              사용 가능한 쿠폰이 없습니다
            </div>
          ) : (
            availableCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="flex items-center gap-[12px] p-[16px] border border-[#F0F0F0] rounded-[12px] mb-[12px] cursor-pointer hover:bg-[#F9F9F9]"
                onClick={() => onSelectCoupon(coupon.id)}
              >
                {/* Radio Button */}
                <div className="flex items-center justify-center w-[20px] h-[20px] border-2 border-[#D0D0D0] rounded-full shrink-0">
                  {selectedCouponId === coupon.id && (
                    <div className="w-[12px] h-[12px] bg-[#3FB5B3] rounded-full" />
                  )}
                </div>

                {/* Coupon Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <span className="text-[#3FB5B3]">🎁</span>
                    <span className="text-[#151515]">{coupon.name}</span>
                  </div>
                  <p className="text-[#848484] text-[14px]">{coupon.description}</p>
                </div>

                {/* Discount Amount */}
                <div className="text-[#3FB5B3] shrink-0">
                  {coupon.discount_amount.toLocaleString()}원
                </div>
              </div>
            ))
          )}
        </div>

        {/* Actions */}
        <div className="px-[20px] pb-[20px] pt-[12px] border-t border-[#F0F0F0]">
          <button
            onClick={handleApply}
            className="w-full h-[54px] bg-[#3FB5B3] text-white rounded-[12px] hover:bg-[#35a09e] active:bg-[#2d8a88] transition-colors"
          >
            적용하기
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
