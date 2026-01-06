import { ArrowLeft } from 'lucide-react';

/**
 * 결제 페이지 스켈레톤 UI 컴포넌트
 * 
 * @description
 * 결제 페이지 로딩 중 표시되는 스켈레톤 화면입니다.
 * 실제 데이터가 로드되기 전까지 레이아웃 구조를 미리 보여줍니다.
 * 
 * @features
 * - 상단 네비게이션 바 (뒤로가기 버튼, 제목)
 * - 상품 정보 섹션 (썸네일, 제목, 라벨, 가격)
 * - 가격 요약 섹션 (상품 가격, 할인, 쿠폰, 총 결제금액)
 * - 결제 정보 안내 섹션
 * - 하단 결제 버튼
 * 
 * @usage
 * ```tsx
 * {isLoading && <PaymentSkeleton />}
 * ```
 */

function BackgroundImage({ additionalClassNames = "" }: { additionalClassNames?: string }) {
  return (
    <div className={`absolute h-[25px] left-0 w-full ${additionalClassNames}`}>
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[13px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-px w-[40px]" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] right-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-full pr-[64px]">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[240px]" />
    </div>
  );
}

function ButtonCountButton() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[32px] right-0 rounded-[8px] to-50% to-[#f0f0f0] top-0 w-[64px]">
      <div className="absolute h-[22px] left-[12px] top-[5px] w-[40px]" />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="relative h-[44px] w-full">
      <div className="absolute h-[32px] left-0 top-0 w-full">
        <TitleContainer />
        <ButtonCountButton />
      </div>
      <div className="absolute h-[0.01px] left-0 top-[44px] w-full" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="relative h-[97px] w-full mt-[11px]">
      {/* 썸네일 */}
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[54px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[80px]">
        <div aria-hidden="true" className="absolute border border-[rgba(239,239,239,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      </div>
      
      {/* 라벨과 제목 */}
      <div className="absolute flex flex-col gap-[14px] items-start left-[92px] top-[3px] w-[129px]">
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] rounded-[4px] to-50% to-[#f0f0f0] w-[66px]" />
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] to-50% to-[#f0f0f0] w-full" />
      </div>
      
      {/* 가격 정보 */}
      <div className="absolute h-[49px] left-[92px] top-[48px] right-0">
        <div className="absolute h-[22px] left-[2px] top-0 w-[55px]" />
        <div className="absolute h-[25px] left-[2px] top-[24px] right-0" />
      </div>
    </div>
  );
}

function ProductSection() {
  return (
    <div className="relative h-[152px] w-full">
      <TextSectionTitle />
      <ProductCard />
    </div>
  );
}

function PriceSummaryTitle() {
  return (
    <div className="relative h-[36px] w-full">
      <div className="absolute h-[24px] left-0 top-0 w-full">
        <div className="absolute h-[24px] left-0 top-0 w-full">
          <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[288px] max-w-[80%]" />
        </div>
      </div>
      <div className="absolute h-[0.01px] left-0 top-[36px] w-full" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function PriceDetailsContainer() {
  return (
    <div className="relative h-[91px] w-full mt-[16px]">
      <div className="relative h-[25px] w-full">
        <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" />
        <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] right-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" />
      </div>
      <BackgroundImage additionalClassNames="top-[33px]" />
      <BackgroundImage additionalClassNames="top-[66px]" />
    </div>
  );
}

function TotalPrice() {
  return (
    <div className="relative bg-[#f9f9f9] h-[72px] w-full mt-[20px]">
      <div className="absolute h-[24px] left-[20px] right-[20px] top-[24px]">
        <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[78px]" />
        <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] right-0 rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[54px]" />
      </div>
    </div>
  );
}

function PriceSummarySection() {
  return (
    <div className="relative w-full">
      <PriceSummaryTitle />
      <PriceDetailsContainer />
      <TotalPrice />
    </div>
  );
}

function PaymentInfoSection() {
  return (
    <div className="relative w-full mt-[32px]">
      <div className="relative h-[34px] w-full">
        <div className="absolute h-[22px] left-0 top-0 w-full">
          <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[212px]" />
        </div>
        <div className="absolute h-[0.01px] left-0 top-[34px] w-full" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      </div>
      
      <div className="flex flex-col gap-[26px] items-start mt-[43px] w-[282px]">
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] to-50% to-[#f0f0f0] w-full" />
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] to-50% to-[#f0f0f0] w-[198px]" />
        <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] to-50% to-[#f0f0f0] w-[183px]" />
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="px-[20px] pt-[16px] pb-[120px]">
      <ProductSection />
      <div className="bg-gradient-to-l border border-[rgba(239,239,239,0.05)] border-solid from-[rgba(239,239,239,0.05)] h-[12px] -mx-[20px] my-[32px] to-50% to-[#f0f0f0] w-[calc(100%+40px)]" />
      <PriceSummarySection />
      <PaymentInfoSection />
    </div>
  );
}

function PaymentButton() {
  return (
    <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[56px] relative rounded-[16px] to-50% to-[#f0f0f0] w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex items-center justify-center px-[12px] py-0 relative size-full">
          <div className="flex gap-[4px] items-center" />
        </div>
      </div>
    </div>
  );
}

function BottomButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] z-10">
      <div className="max-w-[430px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center px-[20px] py-[12px] pb-[calc(12px+env(safe-area-inset-bottom))]">
          <PaymentButton />
        </div>
      </div>
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <div className="flex items-center justify-between relative w-full">
            {/* 뒤로가기 버튼 */}
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] rounded-[12px] size-[44px] to-50% to-[#f0f0f0] flex items-center justify-center">
              <ArrowLeft className="size-[24px] text-[#d0d0d0]" />
            </div>
            {/* 제목 */}
            <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] to-50% to-[#f0f0f0] w-[50px]" />
            {/* 오른쪽 공간 */}
            <div className="opacity-0 size-[44px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="flex flex-col items-start w-full">
      <NavigationTopBar />
      <div className="h-[16px] w-full" />
    </div>
  );
}

export default function PaymentSkeleton() {
  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="max-w-[430px] w-full">
        <TopNavigation />
        <ContentArea />
        <BottomButton />
      </div>
    </div>
  );
}
