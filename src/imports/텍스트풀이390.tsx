import svgPaths from "./svg-8hi5fiyqcu";

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#48b2af] text-[20px] text-center text-nowrap tracking-[-0.2px]">01</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 1">
            <path d="M276 0.5H0" id="Divider" stroke="var(--stroke-0, #E7E7E7)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#151515] text-[18px] tracking-[-0.36px] w-full">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header />
      <TitleContainer />
      <div className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[28.5px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full">
        <p className="mb-0">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다.</p>
        <p className="mb-0">당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었고, 주변 사람들에게도 ‘잘 어울린다’는 말을 들었을 가능성이 높습니다. 이는 사주 속 기운이 서로 상생하는 방향으로 작용했기 때문입니다.</p>
        <p>물론 그때의 안정감이 영원히 유지된다는 뜻은 아니지만, 시작 단계에서의 분위기는 분명 긍정적이었고, 두 사람 모두 관계를 이어가고 싶다는 무의식적 의지를 품고 있었음을 보여줍니다. 마치 목(木)의 기운이 막 움트며 뿌리를 내리려는 순간처럼, 작고 여린 에너지 속에서도 미래로 뻗어나갈 가능성을 품고 있던 시기였습니다.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[28px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function CardInterpretationCard() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-[115px] translate-x-[-50%] w-[350px]" data-name="Card / Interpretation Card">
      <Container1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[18.75%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
        <g id="Group">
          <path d={svgPaths.p14150900} fill="var(--fill-0, #848484)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p5097a80} fill="var(--fill-0, #848484)" fillRule="evenodd" id="Vector_2" />
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

function ButtonIconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons />
    </div>
  );
}

function PageIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page Indicator">
      <ButtonIconButton />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[#b7b7b7] text-[0px] text-[15px] text-nowrap tracking-[-0.3px]">
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[#151515]">01/</span>
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold"> </span>10
      </p>
    </div>
  );
}

function Space() {
  return <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Space" />;
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-left">
          <path d={svgPaths.p2679d700} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
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

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <Icons1 />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#b7b7b7] text-[14px] text-nowrap tracking-[-0.42px]">이전</p>
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

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d={svgPaths.p3117bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px]">다음</p>
      <Icons2 />
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

function Container2() {
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <HomeIndicatorContainer />
    </div>
  );
}

function CommonBottomPageBar() {
  return (
    <div className="absolute bottom-0 h-[88px] left-1/2 translate-x-[-50%] w-[390px]" data-name="Common / Bottom Page Bar">
      <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)]" />
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
      <div className="absolute inset-[0_0_-0.01%_0]">
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

function Box2() {
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

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons3 />
    </div>
  );
}

function LinearClose() {
  return (
    <div className="absolute contents inset-0" data-name="linear/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons4 />
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
    <div className="bg-white relative size-full" data-name="텍스트 풀이 _ 390">
      <TopNavigationContainer />
      <CardInterpretationCard />
      <CommonBottomPageBar />
    </div>
  );
}