import svgPaths from "./svg-ozypiac3qk";
import clsx from "clsx";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">{children}</p>
    </div>
  );
}

function Container24({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Container15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[2px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type NavigationTabItemTextProps = {
  text: string;
};

function NavigationTabItemText({ text }: NavigationTabItemTextProps) {
  return (
    <Wrapper>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#999] text-[15px] text-nowrap tracking-[-0.45px]">{text}</p>
    </Wrapper>
  );
}
type HomeIndicatorLightProps = {
  additionalClassNames?: string;
};

function HomeIndicatorLight({ additionalClassNames = "" }: HomeIndicatorLightProps) {
  return (
    <div className={clsx("h-[28px] relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p123b8a80} id="Vector_2" opacity="0" stroke="var(--stroke-0, #B7B7B7)" />
        </g>
      </svg>
    </div>
  );
}

function LabelBox() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">심화 해석판</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-full">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
    </div>
  );
}

function Container1() {
  return (
    <Container15>
      <Container />
    </Container15>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold gap-[4px] items-center leading-[32.5px] relative shrink-0 text-[22px] text-nowrap tracking-[-0.22px]" data-name="Container">
      <p className="relative shrink-0 text-[#ff6678]">50%</p>
      <p className="relative shrink-0 text-[#151515]">12,900원</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#48b2af] text-[13px] text-nowrap">첫 구매 혜택가</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[32.5px] relative shrink-0 text-[#48b2af] text-[22px] text-nowrap tracking-[-0.22px]">7,900원</p>
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <Container15>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] line-through min-w-full relative shrink-0 text-[#999] text-[14px] tracking-[-0.42px] w-[min-content]">25,800원</p>
      <Container7 />
    </Container15>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.18%_1.79%_8.17%_1.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p364966f0} fill="var(--fill-0, #48B2AF)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p978f000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons">
      <Group />
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d={svgPaths.p3117bd00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p3897ad00} id="Vector_2" opacity="0" stroke="var(--stroke-0, #525252)" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[0px] text-[14px] text-black text-nowrap tracking-[-0.42px]">
        첫 구매 쿠폰 받고<span className="text-[#48b2af]"> </span>
        <span className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[#48b2af]">7,900원으로</span>
        <span>{` 풀이 보기`}</span>
      </p>
      <Icons1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Icons />
      <TextContainer />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function ButtonEventButton() {
  return (
    <div className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full" data-name="Button / Event Button">
      <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card / PriceBlock">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end px-[20px] py-0 relative w-full">
          <Container9 />
          <ButtonEventButton />
        </div>
      </div>
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Card / Deal Card">
      <div className="aspect-[391/270] relative shrink-0 w-full" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThumbnail} />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-end right-0 top-[151px] w-[390px]">
      <CardDealCard />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
    </div>
  );
}

function Container12() {
  return <Wrapper1>운세 설명</Wrapper1>;
}

function Container13() {
  return (
    <Container24>
      <Container12 />
    </Container24>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container16() {
  return (
    <Container24>
      <div className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px]">
        <p className="mb-0">
          달콤했던 시작과 달리, 요즘은 마음이 흔들리지 않나요?
          <br aria-hidden="true" />
          사소한 말에도 불안해지고, 혹시 놓쳐버릴까 두려운 지금.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">겉으로는 보이지 않는 사랑의 방향을 막연한 해석이 아닌,</p>
        <p className="mb-0">그 사람의 본질부터 관계의 결말까지 예측하는 소름돋는</p>
        <p>정확성을 경험하세요.</p>
      </div>
    </Container24>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Component 3">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <Wrapper2 additionalClassNames="inset-[0_-50%_-50%_0]">
      <g id="arrow-down">
        <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Wrapper2>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-[0_-50%_-50%_0]" data-name="Box">
      <ArrowDown />
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[15px] text-nowrap tracking-[-0.45px]">자세히 보기</p>
      <Icons2 />
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Square Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center left-0 top-[775px] w-[390px]">
      <TextComponent />
      <ButtonSquareButton />
    </div>
  );
}

function TitleContainer() {
  return <Wrapper1 additionalClassNames="justify-center">{`이용안내 & 환불 규정`}</Wrapper1>;
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container20 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-0 py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">이용 안내</p>
      <Icons3 />
    </div>
  );
}

function DisclosureAccordion() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Disclosure / Accordion">
      <Container21 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-0 py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">환불 정책</p>
      <Icons4 />
    </div>
  );
}

function DisclosureAccordion1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Disclosure / Accordion">
      <Container22 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <DisclosureAccordion />
      <DisclosureAccordion1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] top-[1174px] w-[350px]">
      <TextSectionTitle />
      <Frame1 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">구매하기</p>
    </div>
  );
}

function ButtonSquareButton1() {
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
          <ButtonSquareButton1 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container23 />
      <HomeIndicatorLight additionalClassNames="bg-white" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-576px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
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

function Box3() {
  return (
    <Wrapper2 additionalClassNames="contents inset-0">
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Wrapper2>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons5 />
    </div>
  );
}

function Box4() {
  return (
    <Wrapper2 additionalClassNames="contents inset-0">
      <g id="home-2">
        <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Wrapper2>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box4 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
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

function NavigationTabItem() {
  return (
    <Wrapper additionalClassNames="bg-[#f8f8f8]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#151515] text-[15px] text-nowrap tracking-[-0.45px]">상품 설명</p>
    </Wrapper>
  );
}

function TabItem() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Tab Item">
      <NavigationTabItem />
      <NavigationTabItemText text="풀이 원리" />
      <NavigationTabItemText text="맛보기" />
    </div>
  );
}

function NavigationTabBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navigation / Tab Bar">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
          <TabItem />
        </div>
      </div>
    </div>
  );
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <NavigationTabBar />
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
    <div className="bg-white relative size-full" data-name="상품 설명 (로그인)">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <Frame3 />
      <div className="absolute bg-[#f9f9f9] h-[12px] left-1/2 top-[1110px] translate-x-[-50%] w-[390px]" />
      <Frame />
      <Frame2 />
      <CommonBottomButton />
    </div>
  );
}