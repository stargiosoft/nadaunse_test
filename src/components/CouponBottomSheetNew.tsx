import svgPaths from "../imports/svg-lofdjvm6te";

interface Coupon {
  id: string;
  name: string;
  discount: number;
  description?: string;
}

interface CouponBottomSheetNewProps {
  isOpen: boolean;
  onClose: () => void;
  coupons: Coupon[];
  selectedCoupon: Coupon | null;
  onSelectCoupon: (coupon: Coupon | null) => void;
  productTitle: string;
  productImage: string;
  productCategory: string;
  basePrice: number;
  specialDiscount: number;
  totalPrice: number;
}

export default function CouponBottomSheetNew({
  isOpen,
  onClose,
  coupons,
  selectedCoupon,
  onSelectCoupon,
  productTitle,
  productImage,
  productCategory,
  basePrice,
  specialDiscount,
  totalPrice,
}: CouponBottomSheetNewProps) {
  if (!isOpen) return null;

  const handleApply = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const couponDiscount = selectedCoupon ? selectedCoupon.discount : 0;
  const finalPrice = basePrice - specialDiscount - couponDiscount;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Bottom sheet */}
      <div className="relative w-full max-w-[390px] bg-white rounded-t-[16px] flex flex-col max-h-[90vh]">
        {/* Handle */}
        <div className="flex items-center justify-center py-[12px]">
          <div className="w-[48px] h-[4px] bg-[#d4d4d4] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-[24px] py-[16px]">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-black">
            쿠폰
          </p>
        </div>

        {/* Content - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-[20px] flex flex-col gap-[16px]">
            {/* Product card */}
            <div className="flex gap-[12px] items-start w-full">
              <div className="w-[80px] h-[54px] rounded-[12px] overflow-hidden border border-[#f9f9f9] shrink-0">
                <img 
                  src={productImage} 
                  alt={productTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[4px]">
                <div className="bg-[#f0f8f8] px-[6px] py-[2px] rounded-[4px] inline-flex self-start">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[12px] leading-[16px] tracking-[-0.24px] text-[#41a09e]">
                    {productCategory}
                  </p>
                </div>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[15px] leading-[25.5px] tracking-[-0.3px] text-black">
                  {productTitle}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#f3f3f3]" />

            {/* Price details */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between px-[2px]">
                <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal text-[15px] leading-[25.5px] tracking-[-0.3px] text-black">
                  상품 금액
                </p>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#151515]">
                  {basePrice.toLocaleString()}원
                </p>
              </div>
              {specialDiscount > 0 && (
                <div className="flex items-center justify-between px-[2px]">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal text-[15px] leading-[25.5px] tracking-[-0.3px] text-black">
                    특별 할인
                  </p>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#151515]">
                    -{specialDiscount.toLocaleString()}원
                  </p>
                </div>
              )}
              <div className="flex items-center justify-between px-[2px]">
                <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal text-[15px] leading-[25.5px] tracking-[-0.3px] text-black">
                  쿠폰 할인
                </p>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#151515]">
                  -{couponDiscount.toLocaleString()}원
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#f3f3f3]" />

            {/* Total */}
            <div className="flex items-center justify-between px-[2px]">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[17px] leading-[24px] tracking-[-0.34px] text-black">
                총 결제 금액
              </p>
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[18px] leading-[24px] tracking-[-0.36px] text-black">
                {Math.max(0, finalPrice).toLocaleString()}원
              </p>
            </div>

            {/* Special notification */}
            {specialDiscount > 0 && (
              <div className="bg-[#f0f8f8] border border-[#7ed4d2] rounded-[12px] px-[16px] py-[12px] flex items-center justify-center gap-[8px]">
                <div className="w-[20px] h-[20px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1a881f00} fill="#48B2AF" />
                  </svg>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[14px] leading-[22px] tracking-[-0.42px] text-[#48b2af]">
                  자동으로 특별 할인 들어갔어요
                </p>
              </div>
            )}
          </div>

          {/* Coupon list - gray background area */}
          <div className="mt-[16px] bg-[#f9f9f9] border-t border-b border-[#f3f3f3] px-[24px] py-[24px]">
            {/* 쿠폰 3개 초과 시 스크롤 적용 */}
            <div 
              className={`flex flex-col gap-[12px] ${
                coupons.length > 2 ? 'max-h-[240px] overflow-y-auto pr-[12px]' : ''
              }`}
              style={coupons.length > 2 ? {
                scrollbarWidth: 'thin',
                scrollbarColor: '#b7b7b7 transparent'
              } as React.CSSProperties : undefined}
            >
              {coupons.map((coupon, index) => (
                <div key={coupon.id}>
                  {index > 0 && <div className="w-full h-[1px] bg-[#e7e7e7]" />}
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => onSelectCoupon(coupon)}
                  >
                    <div className="flex-1 flex flex-col gap-[2px]">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#151515]">
                        -{coupon.discount.toLocaleString()}원
                      </p>
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal text-[13px] leading-[22px] text-[#848484]">
                        {coupon.name}
                      </p>
                    </div>
                    <div className="w-[36px] h-[36px] flex items-center justify-center">
                      {selectedCoupon?.id === coupon.id ? (
                        <div className="w-[20px] h-[20px] rounded-full border-[6px] border-[#48b2af]" />
                      ) : (
                        <div className="w-[20px] h-[20px] rounded-full border-2 border-[#e7e7e7] bg-white" />
                      )}
                    </div>
                  </div>
                  {index < coupons.length - 1 && <div className="h-[12px]" />}
                </div>
              ))}
              
              {/* Divider before "적용 안 함" */}
              {coupons.length > 0 && <div className="w-full h-[1px] bg-[#e7e7e7]" />}
              
              {/* 적용 안 함 option */}
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => onSelectCoupon(null)}
              >
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[16px] leading-[25px] tracking-[-0.32px] text-[#151515]">
                  적용 안 함
                </p>
                <div className="w-[36px] h-[36px] flex items-center justify-center">
                  {!selectedCoupon ? (
                    <div className="w-[20px] h-[20px] rounded-full border-[6px] border-[#48b2af]" />
                  ) : (
                    <div className="w-[20px] h-[20px] rounded-full border-2 border-[#e7e7e7] bg-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] px-[20px] py-[12px]">
          <div className="flex gap-[12px]">
            <button
              onClick={handleCancel}
              className="flex-1 h-[56px] bg-[#f0f8f8] rounded-[16px] flex items-center justify-center"
            >
              <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[16px] leading-[25px] tracking-[-0.32px] text-[#48b2af]">
                취소
              </p>
            </button>
            <button
              onClick={handleApply}
              className="flex-1 h-[56px] bg-[#48b2af] rounded-[16px] flex items-center justify-center"
            >
              <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[16px] leading-[25px] tracking-[-0.32px] text-white">
                쿠폰 적용하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}