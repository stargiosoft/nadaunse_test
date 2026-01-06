/**
 * 가입 축하 쿠폰 안내 페이지 (백업 - 이전 심플 디자인)
 * 
 * @description
 * - 회원가입 완료 후 자동으로 표시되는 쿠폰 안내 화면
 * - 5,000원 가입 축하 쿠폰이 발급되었음을 알림
 * - 🎉 이모지 기반의 심플한 디자인
 * 
 * @props
 * - onClose: () => void - "온앤 받아가기" 버튼 클릭 시 호출
 */

import React from 'react';

interface WelcomeCouponPageProps {
  onClose: () => void;
}

export default function WelcomeCouponPage({ onClose }: WelcomeCouponPageProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center px-[20px] w-full max-w-[390px]">
        
        {/* 캐릭터 일러스트 */}
        <div className="relative w-[200px] h-[200px] mb-[24px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E4F7F7] to-[#C8FFFD] rounded-full flex items-center justify-center">
            <div className="text-[80px]">🎉</div>
          </div>
        </div>

        {/* 메인 메시지 */}
        <h1 className="text-center mb-[12px]">
          가입 축하 쿠폰이<br />도착했어요!
        </h1>

        {/* 쿠폰 금액 */}
        <div className="bg-[#F9F9F9] rounded-[16px] px-[24px] py-[16px] mb-[12px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[#3FB5B3]">🎁</span>
            <span className="text-[#3FB5B3]">5,000원 할인 쿠폰</span>
          </div>
        </div>

        {/* 설명 */}
        <p className="text-center text-[#848484] mb-[32px]">
          결제 시 쿠폰이 자동으로 적용되어요
        </p>

        {/* CTA 버튼 */}
        <button
          onClick={onClose}
          className="w-full h-[54px] bg-[#3FB5B3] text-white rounded-[12px] flex items-center justify-center hover:bg-[#35a09e] active:bg-[#2d8a88] transition-colors"
        >
          온앤 받아가기
        </button>
      </div>
    </div>
  );
}
