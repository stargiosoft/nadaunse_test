import svgPaths from "./svg-oq4i1qhpsm";

function Box3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function DisclosureCheckAccordion6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Container3Props = {
  text: string;
  text1: string;
};

function Container3({ text, text1 }: Container3Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0">{text}</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0">{text1}</p>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type TextContainerProps = {
  text: string;
  text1: string;
};

function TextContainer({ text, text1 }: TextContainerProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#48b2af]">{text}</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0 text-black">{text1}</p>
    </div>
  );
}

function TextLoginText() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Text / Login Text">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-[64px] relative text-black text-center w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">바로 만나기 전</p>
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">잠깐, 약관에 동의해 주세요!</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer text="필수" text1="만 14세 이상입니다" />
    </div>
  );
}

function SelectionControlsCheckBox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion() {
  return (
    <DisclosureCheckAccordion6>
      <Container />
      <SelectionControlsCheckBox />
    </DisclosureCheckAccordion6>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer text="필수" text1="이용약관 동의" />
      <Icons />
    </div>
  );
}

function SelectionControlsCheckBox1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion1() {
  return (
    <DisclosureCheckAccordion6>
      <Container1 />
      <SelectionControlsCheckBox1 />
    </DisclosureCheckAccordion6>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer text="필수" text1="개인정보보 처리방침 동의" />
      <Icons1 />
    </div>
  );
}

function SelectionControlsCheckBox2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion2() {
  return (
    <DisclosureCheckAccordion6>
      <Container2 />
      <SelectionControlsCheckBox2 />
    </DisclosureCheckAccordion6>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container3 text="선택" text1="마케팅 활용 동의" />
      <Icons2 />
    </div>
  );
}

function SelectionControlsCheckBox3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion3() {
  return (
    <DisclosureCheckAccordion6>
      <Container4 />
      <SelectionControlsCheckBox3 />
    </DisclosureCheckAccordion6>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container3 text="선택" text1="광고성 정보 수신 동의" />
      <Icons3 />
    </div>
  );
}

function SelectionControlsCheckBox4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion4() {
  return (
    <DisclosureCheckAccordion6>
      <Container5 />
      <SelectionControlsCheckBox4 />
    </DisclosureCheckAccordion6>
  );
}

function ChecklistItems() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[268px] items-start overflow-clip relative shrink-0 w-full" data-name="Checklist Items">
      <DisclosureCheckAccordion />
      <DisclosureCheckAccordion1 />
      <DisclosureCheckAccordion2 />
      <DisclosureCheckAccordion3 />
      <DisclosureCheckAccordion4 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">약관 전체 동의</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer1 />
    </div>
  );
}

function SelectionControlsCheckBox5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function DisclosureCheckAccordion5() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Container6 />
          <SelectionControlsCheckBox5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <ChecklistItems />
      <DisclosureCheckAccordion5 />
    </div>
  );
}

function DisclosureChecklist() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-[350px]" data-name="Disclosure / Checklist">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#b7b7b7] text-[16px] text-nowrap tracking-[-0.32px]">다음 단계로 이동하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#f8f8f8] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <Container8 />
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
          <ButtonSquareButton />
        </div>
      </div>
    </div>
  );
}

function Container9() {
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
      <Container9 />
      <HomeIndicatorLight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
      <DisclosureChecklist />
      <CommonBottomButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[745px] items-center justify-between left-0 top-[99px] w-[390px]">
      <TextLoginText />
      <Frame1 />
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
    <Box3>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Box3>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons4 />
    </div>
  );
}

function Box2() {
  return (
    <Box3>
      <g id="home-2">
        <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Box3>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons5 />
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
    <div className="bg-white relative size-full" data-name="약관 동의 _ 390">
      <Frame />
      <Frame2 />
    </div>
  );
}