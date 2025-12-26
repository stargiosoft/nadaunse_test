import svgPaths from "./svg-ztc99mdhu4";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">{children}</div>
    </div>
  );
}
type Option2Props = {
  additionalClassNames?: string;
};

function Option2({ children, additionalClassNames = "" }: React.PropsWithChildren<Option2Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type InputContainerProps = {
  text: string;
};

function InputContainer({ children, text }: React.PropsWithChildren<InputContainerProps>) {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper1>
        <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">{text}</p>
        </div>
      </Wrapper1>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <g id="tick-circle">{children}</g>
    </Wrapper2>
  );
}

function Box() {
  return (
    <Wrapper>
      <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <g id="Vector_2" opacity="0"></g>
    </Wrapper>
  );
}
type LabelContainerTextProps = {
  text: string;
};

function LabelContainerText({ text }: LabelContainerTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">{text}</p>
        </div>
      </div>
    </div>
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

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#b7b7b7] text-[16px] text-nowrap tracking-[-0.32px]">저장하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-[358px]" data-name="Button / Square Button">
      <Container />
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container1 />
      <HomeIndicatorLight additionalClassNames="bg-white" />
    </div>
  );
}

function FormInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[115px] w-[350px]" data-name="Form / Input">
      <LabelContainerText text="이름" />
      <InputContainer text="예: 홍길동" />
    </div>
  );
}

function FormInput1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[347px] w-[350px]" data-name="Form / Input">
      <LabelContainerText text="생년월일 (양력 기준으로 입력해 주세요)" />
      <InputContainer text="예: 1992-07-15 (양력)" />
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#d4d4d4] text-[15px] tracking-[-0.45px]">오전 09:00</p>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-[#f8f8f8] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input Container">
      <Wrapper1>
        <InputField />
      </Wrapper1>
    </div>
  );
}

function FormInput2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form / Input">
      <LabelContainerText text="태어난 시간" />
      <InputContainer1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#48b2af] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Icon Container">
      <Icons />
    </div>
  );
}

function SelectionControlsCheckBox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <IconContainer />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-0 pt-[24px] px-0 relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[15px] text-nowrap tracking-[-0.45px]">모르겠어요</p>
      <SelectionControlsCheckBox />
    </div>
  );
}

function OptionContainer() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-end left-[20px] top-[459px] w-[350px]" data-name="Option Container">
      <FormInput2 />
      <ButtonContainer1 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function OptionContent() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">여성</p>
      <Icons1 />
    </div>
  );
}

function Option() {
  return (
    <Option2 additionalClassNames="bg-[#48b2af] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)]">
      <OptionContent />
    </Option2>
  );
}

function Box1() {
  return (
    <Wrapper>
      <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, #E7E7E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <g id="Vector_2" opacity="0"></g>
    </Wrapper>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function OptionContent1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#b7b7b7] text-[15px] text-nowrap tracking-[-0.45px]">남성</p>
      <Icons2 />
    </div>
  );
}

function Option1() {
  return (
    <Option2 additionalClassNames="bg-[#f9f9f9]">
      <OptionContent1 />
    </Option2>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Options">
      <Option />
      <Option1 />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full" data-name="Options container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Options />
        </div>
      </div>
    </div>
  );
}

function SelectionControlsSelectionGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[227px] w-[350px]" data-name="Selection Controls / Selection Group">
      <LabelContainerText text="성별" />
      <OptionsContainer />
    </div>
  );
}

function InputField1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Input Field">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">관계를 선택해 주세요</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[14px] text-nowrap tracking-[-0.42px]">선택</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[80px]" data-name="Button / Square Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container2 />
    </div>
  );
}

function InputRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Input Row">
      <InputField1 />
      <ButtonSquareButton1 />
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Input Container">
      <InputRow />
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

function SelectField() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Select Field">
      <LabelContainerText text="관계" />
      <InputContainer2 />
    </div>
  );
}

function FormSelectField() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[563px] w-[350px]" data-name="Form / Select Field">
      <SelectField />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
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

function Box2() {
  return (
    <Wrapper2>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Wrapper2>
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
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons3 />
    </div>
  );
}

function Box3() {
  return (
    <Wrapper2>
      <g id="home-2">
        <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Wrapper2>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">사주 정보 입력</p>
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
    <div className="bg-white relative size-full" data-name="사주 정보 추가">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <CommonBottomButton />
      <FormInput />
      <FormInput1 />
      <OptionContainer />
      <SelectionControlsSelectionGroup />
      <FormSelectField />
    </div>
  );
}