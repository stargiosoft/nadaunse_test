import svgPaths from "./svg-2hou03mth8";
import clsx from "clsx";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function PriceInfo2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start px-[2px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonSquareButton2Props = {
  additionalClassNames?: string;
};

function ButtonSquareButton2({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonSquareButton2Props>) {
  return (
    <div className={clsx("basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ThumbnailImage() {
  return (
    <div className="h-[120px] pointer-events-none relative rounded-[12px] shrink-0 w-[200px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
    </div>
  );
}
type CouponPriceContainerProps = {
  text: string;
  text1: string;
};

function CouponPriceContainer({ text, text1 }: CouponPriceContainerProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#48b2af] text-nowrap w-full">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">{text}</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[11px]">{text1}</p>
    </div>
  );
}
type DiscountPriceContainerProps = {
  text: string;
  text1: string;
};

function DiscountPriceContainer({ text, text1 }: DiscountPriceContainerProps) {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold gap-[2px] items-center leading-[20px] relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px]">
      <p className="relative shrink-0 text-[#ff6678]">{text}</p>
      <p className="relative shrink-0 text-black">{text1}</p>
    </div>
  );
}
type OriginalPriceContainerTextProps = {
  text: string;
};

function OriginalPriceContainerText({ text }: OriginalPriceContainerTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] line-through relative shrink-0 text-[#999] text-[13px] text-nowrap">{text}</p>
    </div>
  );
}
type TitleContainerTextProps = {
  text: string;
};

function TitleContainerText({ text }: TitleContainerTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">{text}</p>
        </div>
      </div>
    </div>
  );
}
type LabelBoxTextProps = {
  text: string;
};

function LabelBoxText({ text }: LabelBoxTextProps) {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[179.999px] relative shrink-0 w-[146px]">
      <div className="absolute inset-[-0.8%_0_0_-0.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 182">
          <g id="Group 427318538">
            <path d={svgPaths.p347a84f0} fill="var(--fill-0, #F4F4F4)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.pca83900} fill="var(--fill-0, #FDD751)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
              <path d={svgPaths.p10a04f00} fill="var(--fill-0, #EFC748)" id="Vector_3" />
              <path d={svgPaths.p2f464980} fill="var(--fill-0, #FDD751)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
              <path d={svgPaths.p2210d400} fill="var(--fill-0, #EFC748)" id="Vector_5" />
            </g>
            <g id="Group 427318537">
              <path d={svgPaths.p12a56ff0} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
              <g id="Vector_7">
                <path d={svgPaths.p1f5d5680} fill="var(--fill-0, white)" />
                <path d={svgPaths.pbf84f80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
              </g>
            </g>
            <g id="Group_2">
              <path d={svgPaths.p11ec2c00} fill="var(--fill-0, black)" id="Vector_8" />
              <path d={svgPaths.p5b85200} fill="var(--fill-0, black)" id="Vector_9" />
            </g>
            <path d={svgPaths.p2ea90b00} fill="var(--fill-0, #BCD961)" id="Vector_10" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p37227580} fill="var(--fill-0, #BCD961)" id="Vector_11" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d="M82.7921 33.2737V19.9155" id="Vector_12" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p23784a00} fill="var(--fill-0, #FDD751)" id="Vector_13" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p749900} id="Vector_14" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
            <path d={svgPaths.p702f100} id="Vector_15" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[12px] py-[40px] relative shrink-0">
      <Group />
    </div>
  );
}

function TwemojiWrappedGift() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="twemoji:wrapped-gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="twemoji:wrapped-gift" opacity="0.8">
          <path d={svgPaths.p3c46be00} fill="var(--fill-0, #FFD16F)" id="Vector" />
          <path d={svgPaths.p35ee7080} fill="var(--fill-0, #FFD16F)" id="Vector_2" />
          <path d={svgPaths.p3323b300} fill="var(--fill-0, #FCAB40)" id="Vector_3" />
          <path d={svgPaths.p21bad880} fill="var(--fill-0, #FF5569)" id="Vector_4" />
          <path d={svgPaths.p3856f080} fill="var(--fill-0, #FF5569)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 text-[#848484] text-nowrap" data-name="Text Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[13px] tracking-[-0.26px]">운세 구매 고객 전용 쿠폰</p>
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] tracking-[-0.36px]">3,000원</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Content Container">
      <TwemojiWrappedGift />
      <TextContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[20px] relative w-full">
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center px-[12px] py-[16px] relative self-stretch shrink-0 w-[88px]" data-name="Status Container">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-[0px_0px_0px_1px] border-dashed inset-0 pointer-events-none" />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#999] text-[13px] text-center w-full">
        발급
        <br aria-hidden="true" />
        완료
      </p>
    </div>
  );
}

function ButtonCouponCardButton() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Button / Coupon Card Button">
      <Container />
      <StatusContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#48b2af] text-[15px] text-nowrap tracking-[-0.45px]">홈으로 가기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <ButtonSquareButton2 additionalClassNames="bg-[#f0f8f8]">
      <Container1 />
    </ButtonSquareButton2>
  );
}

function ButtonContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Button Container">
      <ButtonSquareButton />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">다른 운세 보기</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <ButtonSquareButton2 additionalClassNames="bg-[#48b2af]">
      <Container2 />
    </ButtonSquareButton2>
  );
}

function ButtonRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Button Row">
      <ButtonContainer />
      <ButtonSquareButton1 />
    </div>
  );
}

function ButtonSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Button Section">
      <ButtonCouponCardButton />
      <ButtonRow />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Image Container">
      <Frame />
      <ButtonSection />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이런 운세는 어때요?</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container3 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainerText text="혹시 지금 바람 피우고 있을까?" />
    </div>
  );
}

function OriginalPriceContainer() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainerText text="25,800원" />
    </div>
  );
}

function OriginalPriceContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer />
    </div>
  );
}

function DiscountPriceContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Discount Price Container">
      <DiscountPriceContainer text="50%" text1="12,900원" />
    </div>
  );
}

function PriceInfo() {
  return (
    <PriceInfo2>
      <OriginalPriceContainer1 />
      <DiscountPriceContainer1 />
      <CouponPriceContainer text="9,900원" text1="쿠폰 적용가" />
    </PriceInfo2>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer1 />
      <PriceInfo />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBoxText text="심화 해석판" />
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <ThumbnailImage />
      <CardPriceBlock />
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card / Deal Card">
      <Container5 />
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainerText text="내 연인은 바람기 있을까?" />
    </div>
  );
}

function OriginalPriceContainer2() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainerText text="25,800원" />
    </div>
  );
}

function OriginalPriceContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer2 />
    </div>
  );
}

function DiscountPriceContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Discount Price Container">
      <DiscountPriceContainer text="50%" text1="12,900원" />
    </div>
  );
}

function PriceInfo1() {
  return (
    <PriceInfo2>
      <OriginalPriceContainer3 />
      <DiscountPriceContainer2 />
      <CouponPriceContainer text="9,900원" text1="쿠폰 적용가" />
    </PriceInfo2>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer2 />
      <PriceInfo1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBoxText text="심화 해석판" />
      <ProductInfo1 />
    </div>
  );
}

function CardPriceBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <ThumbnailImage />
      <CardPriceBlock1 />
    </div>
  );
}

function CardDealCard1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card / Deal Card">
      <Container7 />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center mr-[-20px] p-[12px] relative rounded-[12px] shrink-0 w-[200px]" data-name="Button Container">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-dashed inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative shrink-0 text-[#6d6d6d] text-[15px] text-nowrap tracking-[-0.3px]">더 볼래요!</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative size-[44px]" data-name="Icons">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Icons">
            <rect fill="white" height="44" width="44" />
            <path d={svgPaths.p3bb19300} fill="var(--fill-0, #D4D4D4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonMoreViewButton() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[20px] py-0 relative self-stretch shrink-0" data-name="Button / More view Button">
      <ButtonContainer1 />
      <div className="flex items-center justify-center mr-[-20px] relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Card Content">
      <CardDealCard />
      <CardDealCard1 />
      <ButtonMoreViewButton />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[350px]" data-name="Card Container">
      <TextSectionTitle />
      <CardContent />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content Container">
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" data-name="Divider" />
      <CardContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 top-[115px] w-[390px]" data-name="Main Container">
      <ImageContainer />
      <ContentContainer1 />
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

function HomeIndicatorContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Home Indicator Container">
      <HomeIndicatorLight />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HomeIndicatorContainer />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Container">
      <Container8 />
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
    <div className="absolute h-[11.335px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
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

function Box() {
  return (
    <Wrapper>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Wrapper>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
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

function LinearClose() {
  return (
    <Wrapper>
      <g id="Box">
        <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Wrapper>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">{`풀이는 여기까지예요 `}</p>
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

function Box1() {
  return (
    <Wrapper>
      <g id="tick-circle">
        <path d={svgPaths.p19b5fe00} fill="var(--fill-0, #46BB6F)" id="Vector" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Wrapper>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icons3 />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[13px] text-nowrap text-white">쿠폰이 발급되었습니다</p>
    </div>
  );
}

function FeedbackToast() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.5)] bottom-[36px] content-stretch flex flex-col items-start left-1/2 pl-[12px] pr-[16px] py-[8px] rounded-[999px] translate-x-[-50%]" data-name="Feedback / Toast">
      <Container10 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="풀이 마지막 (쿠폰 저장 후)">
      <Container9 />
      <TopNavigationContainer />
      <FeedbackToast />
      <MainContainer />
    </div>
  );
}