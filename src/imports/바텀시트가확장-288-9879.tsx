import svgPaths from "./svg-xm34jwmp2s";
import clsx from "clsx";
import imgSwords11Png from "figma:asset/2ced5a86877d398cd3930c1ef08e032cadaa48d4.png";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4 from "figma:asset/15cbc23fdc3c42dfec3751fe87624e97923cb467.png";

function Box3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function ButtonContentsButton10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[56px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ContentContainerHelper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.5px_-0.13%]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 391 1">
          <path d="M0.5 0.5H390.5" id="Vector 35" stroke="var(--stroke-0, #F3F3F3)" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function Container19Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.5px_-0.14%]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
          <path d="M0.5 0.5H350.5" id="Vector 31" stroke="var(--stroke-0, #F3F3F3)" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
type SongInfo2Props = {
  text: string;
  text1: string;
};

function SongInfo2({ text, text1 }: SongInfo2Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.3px]">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium relative shrink-0 text-[#b7b7b7] w-[24px]">{text}</p>
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black">{text1}</p>
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#f0f8f8] content-stretch flex items-center justify-center relative shrink-0", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons />
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

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">상세 풀이</p>
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

function Group() {
  return (
    <div className="absolute inset-[18.75%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
        <g id="Group">
          <path d={svgPaths.p14150900} fill="var(--fill-0, #848484)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18646500} fill="var(--fill-0, #848484)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons">
      <Group />
    </div>
  );
}

function ButtonIconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons2 />
    </div>
  );
}

function PageIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page Indicator">
      <ButtonIconButton />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[#b7b7b7] text-[0px] text-[15px] text-nowrap tracking-[-0.3px]">
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[#151515]">03/</span>
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold"> </span>10
      </p>
    </div>
  );
}

function Space() {
  return <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Space" />;
}

function Box2() {
  return (
    <Box3>
      <g id="arrow-left">
        <path d={svgPaths.p2679d700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Box3>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <Icons3 />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px]">이전</p>
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ButtonContainer />
    </div>
  );
}

function Box4() {
  return (
    <Box3>
      <g id="arrow-right">
        <path d={svgPaths.p3117bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Box3>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box4 />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px]">다음</p>
      <Icons4 />
    </div>
  );
}

function ButtonTextButton1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ButtonContainer1 />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Navigation Buttons">
      <ButtonTextButton />
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute inset-[-4.17%_-0.5px]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
            <path d="M0.5 0.5V12.5" id="Vector 30" stroke="var(--stroke-0, #E7E7E7)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <ButtonTextButton1 />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation Bar">
      <PageIndicator />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Space />
      </div>
      <NavigationButtons />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[28px] py-[12px] relative size-full">
          <NavigationBar />
        </div>
      </div>
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <Container />
      <HomeIndicatorContainer />
    </div>
  );
}

function CommonBottomPageBar() {
  return (
    <div className="absolute bottom-0 h-[88px] left-1/2 translate-x-[-50%] w-[390px]" data-name="Common / Bottom Page Bar">
      <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#48b2af] text-[20px] text-center text-nowrap tracking-[-0.2px]">03</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 1">
            <path d="M272 0.5H0" id="Divider" stroke="var(--stroke-0, #E7E7E7)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swords11Png() {
  return (
    <div className="h-[260px] relative rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[150px]" data-name="Swords11.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSwords11Png} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#151515] text-[18px] tracking-[-0.36px] w-full">Page of swords</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[28.5px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full">이 카드는 호기심과 탐구심, 그리고 진실을 알고자 하는 열망을 상징합니다. 상대방을 향한 당신의 관심이 깊어지고 있으며, 마음속에 질문이 많아지는 시기일 수 있습니다. 다만, 모든 것을 성급히 판단하기보다 관찰하고 배워가야 할 때입니다. 말과 행동에서 솔직함이 중요하며, 작은 오해를 바로잡는 데 힘쓰면 관계가 훨씬 안정될 수 있습니다.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Swords11Png />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header />
      <Container4 />
    </div>
  );
}

function CardInterpretationCard() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex items-start justify-center left-1/2 px-[20px] py-[28px] rounded-[16px] top-[123px] translate-x-[-50%] w-[350px]" data-name="Card / Interpretation Card">
      <Container5 />
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
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">목차</p>
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

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Text text="심화 해석판" additionalClassNames="px-[6px] py-[2px] rounded-[4px]" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Container">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <Container7 />
    </div>
  );
}

function ListContentsProductCard() {
  return (
    <div className="bg-[#f7f8f9] relative shrink-0 w-full" data-name="List / Contents Product card">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function SongInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.3px]" data-name="Song Info">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium relative shrink-0 text-[#b7b7b7] w-[24px]">01</p>
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-black">내 사랑, 오래 지속될 인연일까?</p>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo />
      <Text text="보는 중" additionalClassNames="px-[8px] py-[4px] rounded-[8px]" />
      <Icons5 />
    </div>
  );
}

function ButtonContentsButton() {
  return (
    <ButtonContentsButton10>
      <Container9 />
    </ButtonContentsButton10>
  );
}

function SongInfo1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.3px]" data-name="Song Info">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium relative shrink-0 text-[#b7b7b7] w-[24px]">02</p>
      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow h-[47px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-black">이 감정, 스쳐가는 바람일까 진짜일까? 이 감정, 스쳐가는 바람일까 진짜일까?</p>
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo1 />
      <Icons6 />
    </div>
  );
}

function ButtonContentsButton1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button / Contents Button">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="03" text1="우리 관계, 지금이 전환점일까?" />
      <Icons7 />
    </div>
  );
}

function ButtonContentsButton2() {
  return (
    <ButtonContentsButton10>
      <Container11 />
    </ButtonContentsButton10>
  );
}

function Icons8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="04" text1="그 사람의 마음, 진심일까 순간일까?" />
      <Icons8 />
    </div>
  );
}

function ButtonContentsButton3() {
  return (
    <ButtonContentsButton10>
      <Container12 />
    </ButtonContentsButton10>
  );
}

function Icons9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="05" text1="잠시 스치는 인연일까, 평생의 동반자일까?" />
      <Icons9 />
    </div>
  );
}

function ButtonContentsButton4() {
  return (
    <ButtonContentsButton10>
      <Container13 />
    </ButtonContentsButton10>
  );
}

function Icons10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="06" text1="놓아야 할 인연일까?" />
      <Icons10 />
    </div>
  );
}

function ButtonContentsButton5() {
  return (
    <ButtonContentsButton10>
      <Container14 />
    </ButtonContentsButton10>
  );
}

function Icons11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="07" text1="그와 나, 운명처럼 이어질까?" />
      <Icons11 />
    </div>
  );
}

function ButtonContentsButton6() {
  return (
    <ButtonContentsButton10>
      <Container15 />
    </ButtonContentsButton10>
  );
}

function Icons12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="08" text1="우리의 사랑, 위기일까 기회일까?" />
      <Icons12 />
    </div>
  );
}

function ButtonContentsButton7() {
  return (
    <ButtonContentsButton10>
      <Container16 />
    </ButtonContentsButton10>
  );
}

function Icons13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="09" text1="Title (1line)" />
      <Icons13 />
    </div>
  );
}

function ButtonContentsButton8() {
  return (
    <ButtonContentsButton10>
      <Container17 />
    </ButtonContentsButton10>
  );
}

function Icons14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SongInfo2 text="10" text1="Title (1line)" />
      <Icons14 />
    </div>
  );
}

function ButtonContentsButton9() {
  return (
    <ButtonContentsButton10>
      <Container18 />
    </ButtonContentsButton10>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <ButtonContentsButton />
      <Container19Helper />
      <ButtonContentsButton1 />
      <Container19Helper />
      <ButtonContentsButton2 />
      <Container19Helper />
      <ButtonContentsButton3 />
      <Container19Helper />
      <ButtonContentsButton4 />
      <Container19Helper />
      <ButtonContentsButton5 />
      <Container19Helper />
      <ButtonContentsButton6 />
      <Container19Helper />
      <ButtonContentsButton7 />
      <Container19Helper />
      <ButtonContentsButton8 />
      <Container19Helper />
      <ButtonContentsButton9 />
      <Container19Helper />
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow h-[651px] min-h-px min-w-px mr-[-11px] relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative size-full">
          <Container19 />
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

function List() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-start min-h-px min-w-px pl-0 pr-[11px] py-0 relative shrink-0 w-full" data-name="List">
      <Container20 />
      <IndependentScrollBar />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Content Container">
      <IndependentHandle />
      <BottomSheetBottomSheetHeader />
      <ListContentsProductCard />
      <List />
      <ContentContainerHelper />
      <ContentContainerHelper />
      <ContentContainerHelper />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">목차 닫기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-[358px]" data-name="Button / Square Button">
      <ButtonContainer2 />
    </div>
  );
}

function ButtonContainer3() {
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

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer3 />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full" data-name="Common / Bottom Button">
      <Container21 />
      <HomeIndicatorLight />
    </div>
  );
}

function BottomSheetContentsBottomSheetWidget() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[794px] items-start left-1/2 translate-x-[-50%] w-[390px]" data-name="Bottom Sheet / Contents Bottom Sheet (Widget)">
      <ContentContainer />
      <CommonBottomButton />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="바텀 시트가 확장">
      <TopNavigationContainer />
      <CommonBottomPageBar />
      <CardInterpretationCard />
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[844px] right-0 top-0 w-[390px]" data-name="Background" />
      <BottomSheetContentsBottomSheetWidget />
    </div>
  );
}