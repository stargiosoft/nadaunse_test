import svgPaths from "./svg-af1v0d84ot";

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

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HomeIndicatorContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-px content-stretch flex flex-col items-start left-0 shadow-[0px_-10px_16px_0px_white] w-[390px]" data-name="Container">
      <Container />
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute contents left-[103px] top-[-2px]" data-name="Notch">
      <div className="absolute h-[30px] left-[calc(50%-0.5px)] top-[-2px] translate-x-[-50%] w-[183px]" data-name="Notch">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
            <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
      <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
            <path d={svgPaths.p3544af00} fill="var(--fill-0, black)" id="Rectangle" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right Side">
      <Battery />
      <div className="absolute h-[10.965px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
        <div className="absolute inset-[0_0_-0.01%_0]" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d={svgPaths.p3cedac70} fill="var(--fill-0, black)" id="Wifi" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[10.666px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
            <path d={svgPaths.p8f92040} fill="var(--fill-0, black)" id="Mobile Signal" />
          </svg>
        </div>
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

function IPhoneXOrNewerLightDefault() {
  return (
    <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-full" data-name="iPhone X (or newer)/Light/Default">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter content-stretch flex flex-col items-start left-0 top-0 w-[390px]">
      <IPhoneXOrNewerLightDefault />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[17px] text-black tracking-[-0.34px] w-full">로그인이 필요해요</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#868686] text-[15px] tracking-[-0.3px] w-full">계속 보시려면 다시 로그인해 주세요.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-[20px] relative w-full">
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">로그인 하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="basis-0 bg-[#48b2af] grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="•  Button/Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button Wrapper">
      <ButtonSquareButton />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-[24px] relative w-full">
          <ButtonWrapper />
        </div>
      </div>
    </div>
  );
}

function FeedbackAlert() {
  return (
    <div className="absolute left-1/2 rounded-[20px] top-[calc(50%+22.5px)] translate-x-[-50%] translate-y-[-50%] w-[320px]" data-name="• Feedback/Alert">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container2 />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="로그인 세션 만료">
      <Container1 />
      <Frame />
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[844px] left-0 top-0 w-[390px]" />
      <FeedbackAlert />
    </div>
  );
}