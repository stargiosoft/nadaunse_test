import svgPaths from "./svg-i6d2l3t9v";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 구성</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] font-medium gap-[8px] items-center leading-[22px] relative shrink-0 text-[#525252] text-[13px] text-nowrap" data-name="Container">
      <p className="relative shrink-0">쿠폰</p>
      <p className="relative shrink-0">3</p>
    </div>
  );
}

function ButtonCountButton() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Button / Count Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
      <ButtonCountButton />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container1 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="flash">
          <path d={svgPaths.p12d62f00} fill="var(--fill-0, #48B2AF)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#48b2af] text-[14px] text-nowrap tracking-[-0.42px]">특별 할인 + 쿠폰 사용으로 이번 결제는 7,900원이에요</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[318px]" data-name="Container">
      <Icons />
      <Container2 />
    </div>
  );
}

function FeedbackNotification() {
  return (
    <div className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full" data-name="Feedback / Notification">
      <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function LabelBox() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">심화 해석판</p>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">내 연인은 바람기 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer1 />
    </div>
  );
}

function OriginalPriceContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] line-through relative shrink-0 text-[#999] text-[13px] text-nowrap">25,800원</p>
    </div>
  );
}

function OriginalPriceContainer1() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer />
    </div>
  );
}

function OriginalPriceContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer1 />
    </div>
  );
}

function CouponPriceContainer() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#48b2af] text-nowrap w-full" data-name="Coupon Price Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">7,900원</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[11px]">특별할인 + 쿠폰 적용가</p>
    </div>
  );
}

function PriceInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price Info">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start px-[2px] py-0 relative w-full">
          <OriginalPriceContainer2 />
          <CouponPriceContainer />
        </div>
      </div>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer2 />
      <PriceInfo />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox />
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Card / PriceBlock">
      <Container4 />
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Card / Deal Card">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <FeedbackNotification />
      <CardDealCard />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[350px]">
      <TextSectionTitle />
      <Frame5 />
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">결제 금액</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer3 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container5 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductPriceContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Price Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">상품 금액</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">25,800원</p>
        </div>
      </div>
    </div>
  );
}

function SpecialDiscountContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Special Discount Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">기본 할인</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-12,900원</p>
        </div>
      </div>
    </div>
  );
}

function CouponDiscountContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Discount Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">쿠폰 할인</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">0원</p>
        </div>
      </div>
    </div>
  );
}

function PriceDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Price Details Container">
      <ProductPriceContainer />
      <SpecialDiscountContainer />
      <CouponDiscountContainer />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-0 relative w-full">
          <TextSectionTitle1 />
          <PriceDetailsContainer />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold grow items-center justify-between leading-[24px] min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="relative shrink-0 text-[17px] text-black tracking-[-0.34px]">총 결제 금액</p>
      <p className="relative shrink-0 text-[#48b2af] text-[18px] tracking-[-0.36px]">12,900원</p>
    </div>
  );
}

function TotalPrice() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Total Price">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function TextPriceSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Text / PriceSummary">
      <Title />
      <TotalPrice />
    </div>
  );
}

function TitleContainer4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">결제 수단</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer4 />
    </div>
  );
}

function TextSectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container6 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function OuterCircle() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[20px]" data-name="Outer Circle">
      <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <OuterCircle />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[6px] relative shrink-0 w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 6">
        <g id="Group 427318818">
          <path clipRule="evenodd" d={svgPaths.p18b2da80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p58ec500} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p22159380} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pbb49340} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fbeb4f] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[28px]">
      <Group />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.3px]">카카오페이</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <SelectionControlsRadioButton />
      <Frame14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container7 />
    </div>
  );
}

function VuesaxOutlineCard() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="card">
          <path d={svgPaths.p1b287980} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.pba16da0} fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d={svgPaths.p1b797780} fill="var(--fill-0, #525252)" id="Vector_3" />
          <path d={svgPaths.p3f2a0500} fill="var(--fill-0, #525252)" id="Vector_4" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <VuesaxOutlineCard />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[2px] pr-0 py-0 relative shrink-0">
      <Icons1 />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.3px]">신용 · 체크카드</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <SelectionControlsRadioButton1 />
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-0 relative w-full">
          <TextSectionTitle2 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function TextPriceSummary1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[390px]" data-name="Text / PriceSummary">
      <Title1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
      <TextPriceSummary />
      <TextPriceSummary1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#525252] text-[14px] tracking-[-0.42px] w-full">결제 금액과 안내 사항을 확인했어요</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Heading />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#525252] text-[13px] tracking-[-0.26px] w-full">
        <p className="leading-[19px]">개인정보 수집 이용 동의</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
        <p className="leading-[19px] mb-0">수집 및 이용 목적</p>
        <ul>
          <li className="list-disc ms-[19.5px]">
            <span className="leading-[19px]">개인 맞춤형 운세 콘텐츠 생성 및 제공, 유료 서비스 이용에 따른 계약 이행, AI 콘텐츠 준비 완료 시 알림톡 발송, 고객 문의 응대 및 불만 처리 등 원활한 서비스 이용을 위한 본인 확인</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
        <p className="leading-[19px] mb-0">수집하는 개인정보 항목</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[19.5px]">
            <span className="leading-[19px]">회원 식별 정보: 이름, 이메일, 휴대전화번호</span>
          </li>
          <li className="ms-[19.5px]">
            <span className="leading-[19px]">콘텐츠 생성 정보: 생년월일, 태어난 시, 성별</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Item1 />
      <Item2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Item />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-0 relative shrink-0 w-[390px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function CommonLogo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59px]" data-name="Common / Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 20">
        <g id="Common / Logo">
          <path d={svgPaths.p1fb34640} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p1bbbb200} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p11620600} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p9a70500} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p115ca080} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.pb2cf980} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p211e0700} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p3088fdc0} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p2e718980} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p15169200} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[4px] items-start leading-[19px] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
      <p className="relative shrink-0 w-full">Copyright 2024@Stargiosoft All Rights Reserved.</p>
      <p className="relative shrink-0 w-full">대표자 서지현 | 사업자등록번호 827-88-01815</p>
      <p className="relative shrink-0 w-full">통신판매업번호 2024-서울영등포-2084</p>
      <p className="relative shrink-0 w-full">서울시 영등포구 양평로 149, 1507호</p>
      <p className="relative shrink-0 w-full">문의 stargiosoft@gmail.com</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-0 relative w-full">
          <CommonLogo />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px]">이용약관</p>
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px]">개인정보 처리방침</p>
    </div>
  );
}

function ButtonTextButton1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <Container9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonTextButton />
      <div className="h-[8px] relative shrink-0 w-0">
        <div className="absolute inset-[-6.25%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector 65" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <ButtonTextButton1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pb-[40px] pt-[32px] px-[20px] relative shrink-0 w-[390px]" data-name="Footer">
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-[114px] w-[390px]">
      <Frame6 />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
      <Frame13 />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
      <Frame4 />
      <Footer />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">0원 구매하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#48b2af] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <ButtonSquareButton />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container10 />
      <HomeIndicatorLight />
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute h-[30px] left-[103px] top-[-2px] w-[183px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
        <g id="Notch">
          <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2d05aa80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1fcfdd80} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p12636800} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p10be8f00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3cc2d900} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IndependentIPhoneStatusBar() {
  return (
    <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[390px]" data-name="Independent / iPhone Status Bar">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons2 />
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-2">
          <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">결제</p>
      <RightAction />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Spacer" />;
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <Spacer />
    </div>
  );
}

function TopNavigationContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Top Navigation Container">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="509">
      <TopNavigationContainer />
      <Frame7 />
      <CommonBottomButton />
    </div>
  );
}