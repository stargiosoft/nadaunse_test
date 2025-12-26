import svgPaths from "./svg-iltjkti27j";

function Refresh() {
  return (
    <div className="absolute inset-[0_-100%_-100%_0]" data-name="refresh-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh-2">
          <path d={svgPaths.p26d97b00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-[0_-100%_-100%_0]" data-name="Box">
      <Refresh />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#525252] text-[13px] text-nowrap">정이경님</p>
      <Icons />
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="absolute bg-white content-stretch flex h-[22px] items-center justify-center left-[285px] px-[12px] py-0 rounded-[8px] top-[-106px]" data-name="Button / Square Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

function TextLoginText() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Text / Login Text">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-[64px] relative text-black text-center w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">이미 가입하신 계정이 있어요</p>
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">아래 계정으로 로그인해 보세요</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(254, 229, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Frame 427320540">
            <path d={svgPaths.p2e8b0700} fill="var(--fill-0, #FEE500)" />
            <path clipRule="evenodd" d={svgPaths.peaac300} fill="var(--fill-0, #1F1F1F)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[24px] relative shrink-0 text-[17px] text-black tracking-[-0.34px] w-full">bluebe****@kakao.com</p>
      <p className="leading-[22px] relative shrink-0 text-[#999] text-[14px] tracking-[-0.42px] w-full">가입일 : 2025. 09. 16</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[12px] shrink-0 w-[350px]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TextLoginText />
      <Frame2 />
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and Label">
      <div className="h-[18.537px] relative shrink-0 w-[20.179px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <path clipRule="evenodd" d={svgPaths.p2d30f4f0} fill="var(--fill-0, #1F1F1F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[25px]">kakao 계정으로 로그인</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fee500] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fee500] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-px relative size-full">
          <IconAndLabel />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer />
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
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full" data-name="Common / Bottom Button">
      <Container1 />
      <HomeIndicatorLight />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[745px] items-center justify-between left-0 top-[99px] w-[390px]">
      <Frame5 />
      <CommonBottomButton />
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

function TopNavigation1Depth() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Top Navigation/1depth">
      <NavigationTopBar />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]">
      <IndependentIPhoneStatusBar />
      <TopNavigation1Depth />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="기가입자 카카오 _ 390">
      <Frame />
      <ButtonSquareButton />
      <Frame6 />
    </div>
  );
}