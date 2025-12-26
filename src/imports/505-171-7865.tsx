import svgPaths from "./svg-r5ldb7uc07";
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
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#48b2af] text-[14px] text-nowrap tracking-[-0.42px]">특별 할인 + 쿠폰 사용으로 이번 결제는 0원이에요</p>
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
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">0원</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <FeedbackNotification />
      <CardDealCard />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[350px]">
      <TextSectionTitle />
      <Frame4 />
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
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">특별 할인</p>
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
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-12,900원</p>
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

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold grow items-center justify-between leading-[24px] min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="relative shrink-0 text-[17px] text-black tracking-[-0.34px]">총 결제 금액</p>
      <p className="relative shrink-0 text-[#48b2af] text-[18px] tracking-[-0.36px]">0원</p>
    </div>
  );
}

function TotalPrice() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Total Price">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <Frame7 />
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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#525252] text-[14px] tracking-[-0.42px] w-full">결제 금액과 안내 사항을 확인했어요</p>
    </div>
  );
}

function Frame1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Item1 />
      <Item2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Item />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] py-0 relative shrink-0 w-[390px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-[123px] w-[390px]">
      <Frame5 />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
      <TextPriceSummary />
      <Frame3 />
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

function Container6() {
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
      <Container6 />
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
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
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

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons1 />
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

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons2 />
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

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
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

function IndependentHandle() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Independent / Handle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[12px] relative w-full">
          <div className="bg-[#d4d4d4] h-[4px] rounded-[999px] shrink-0 w-[48px]" data-name="Handle" />
        </div>
      </div>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Header Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">쿠폰</p>
    </div>
  );
}

function BottomSheetBottomSheetHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Bottom Sheet / Bottom Sheet Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <HeaderTextContainer />
        </div>
      </div>
    </div>
  );
}

function LabelBox1() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">심화 해석판</p>
    </div>
  );
}

function TitleContainer4() {
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

function TitleContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer4 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox1 />
      <ProductInfo1 />
    </div>
  );
}

function CardPriceBlock1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Card / PriceBlock">
      <Container7 />
    </div>
  );
}

function CardDealCard1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Card / Deal Card">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <CardPriceBlock1 />
    </div>
  );
}

function ProductPriceContainer1() {
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

function SpecialDiscountContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Special Discount Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">특별 할인</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-12,900원</p>
        </div>
      </div>
    </div>
  );
}

function CouponDiscountContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Discount Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">쿠폰 할인</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-5,000원</p>
        </div>
      </div>
    </div>
  );
}

function PriceDetailsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Price Details Container">
      <ProductPriceContainer1 />
      <SpecialDiscountContainer1 />
      <CouponDiscountContainer1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title">
      <PriceDetailsContainer1 />
    </div>
  );
}

function TotalPaymentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Total Payment Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold items-center justify-between leading-[24px] px-[2px] py-0 relative text-black text-nowrap w-full">
          <p className="relative shrink-0 text-[17px] tracking-[-0.34px]">총 결제 금액</p>
          <p className="relative shrink-0 text-[18px] tracking-[-0.36px]">7,900원</p>
        </div>
      </div>
    </div>
  );
}

function TotalPaymentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Total Payment Container">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <TotalPaymentContainer />
    </div>
  );
}

function TextPriceSummary1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text / PriceSummary">
      <Title1 />
      <TotalPaymentContainer1 />
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tick-circle">
          <path d={svgPaths.p1a881f00} fill="var(--fill-0, #48B2AF)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#48b2af] text-[14px] text-nowrap tracking-[-0.42px]">{`자동으로 특별 할인 들어갔어요 `}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[318px]" data-name="Container">
      <Icons3 />
      <Container8 />
    </div>
  );
}

function FeedbackNotification1() {
  return (
    <div className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full" data-name="Feedback / Notification">
      <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function ProductDetailsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Details Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[20px] py-0 relative w-full">
          <CardDealCard1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
              </svg>
            </div>
          </div>
          <TextPriceSummary1 />
          <FeedbackNotification1 />
        </div>
      </div>
    </div>
  );
}

function CouponOptionTextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full">-5,000원</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#848484] text-[13px] w-full">가입축하쿠폰</p>
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

function CouponOptionRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Coupon Option Row">
      <CouponOptionTextContainer />
      <SelectionControlsRadioButton />
    </div>
  );
}

function CouponOptionTextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full">-3,000원</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#848484] text-[13px] w-full">재구매 쿠폰</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container10 />
    </div>
  );
}

function CouponOptionRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Coupon Option Row">
      <CouponOptionTextContainer1 />
      <SelectionControlsRadioButton1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container11 />
    </div>
  );
}

function NoCouponOptionTextContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="No Coupon Option Text Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">적용 안 함</p>
      <SelectionControlsRadioButton2 />
    </div>
  );
}

function NoCouponOptionRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="No Coupon Option Row">
      <NoCouponOptionTextContainer />
    </div>
  );
}

function CouponOptionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Coupon Options Container">
      <CouponOptionRow />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #E7E7E7)" />
          </svg>
        </div>
      </div>
      <CouponOptionRow1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #E7E7E7)" />
          </svg>
        </div>
      </div>
      <NoCouponOptionRow />
    </div>
  );
}

function CouponListContainer() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px mr-[-11px] relative shrink-0" data-name="Coupon List Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <CouponOptionsContainer />
        </div>
      </div>
    </div>
  );
}

function IndependentScrollBar() {
  return (
    <div className="content-stretch flex items-center mr-[-11px] p-[4px] relative shrink-0" data-name="Independent / Scroll Bar">
      <div className="bg-[#b7b7b7] h-[50px] rounded-[999px] shrink-0 w-[3px]" data-name="Indicator" />
    </div>
  );
}

function BottomSheetCouponSelectionContainer() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[11px] py-0 relative shrink-0 w-full" data-name="Bottom Sheet / Coupon Selection Container">
      <CouponListContainer />
      <IndependentScrollBar />
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Details Container">
      <ProductDetailsContainer />
      <BottomSheetCouponSelectionContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Content Container">
      <IndependentHandle />
      <BottomSheetBottomSheetHeader />
      <DetailsContainer />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">취소</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <div className="basis-0 bg-[#f0f8f8] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer2 />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">쿠폰 적용하기</p>
    </div>
  );
}

function ButtonSquareButton2() {
  return (
    <div className="basis-0 bg-[#48b2af] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer3 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Button Group">
      <ButtonSquareButton1 />
      <ButtonSquareButton2 />
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer4 />
    </div>
  );
}

function HomeIndicatorLight1() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function CommonBottomButton1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full" data-name="Common / Bottom Button">
      <Container12 />
      <HomeIndicatorLight1 />
    </div>
  );
}

function BottomSheetCouponBottomSheetWidget() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 translate-x-[-50%] w-[390px]" data-name="Bottom Sheet / Coupon Bottom Sheet (Widget)">
      <ContentContainer />
      <CommonBottomButton1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="505">
      <Frame6 />
      <CommonBottomButton />
      <TopNavigationContainer />
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[844px] left-0 top-0 w-[390px]" data-name="Background" />
      <BottomSheetCouponBottomSheetWidget />
    </div>
  );
}