import svgPaths from "./svg-5i51gk76vd";

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

function Box() {
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

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons />
    </div>
  );
}

function Box1() {
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

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">사주 정보 선택</p>
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
      <Container1 />
      <HomeIndicatorLight />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">이름</p>
        </div>
      </div>
    </div>
  );
}

function InputFieldContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">예: 홍길동</p>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputFieldContainer />
        </div>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[123px] w-[354px]" data-name="Form / Input">
      <LabelContainer />
      <InputContainer />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">생년월일 (양력 기준으로 입력해 주세요)</p>
        </div>
      </div>
    </div>
  );
}

function InputFieldContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">예: 1992-07-15 (양력)</p>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputFieldContainer1 />
        </div>
      </div>
    </div>
  );
}

function FormInput1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[355px] w-[354px]" data-name="Form / Input">
      <LabelContainer1 />
      <InputContainer1 />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">태어난 시간</p>
        </div>
      </div>
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

function InputContainer2() {
  return (
    <div className="bg-[#f8f8f8] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputField />
        </div>
      </div>
    </div>
  );
}

function FormInput2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form / Input">
      <LabelContainer2 />
      <InputContainer2 />
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_2" opacity="0"></g>
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

function IconContainer() {
  return (
    <div className="bg-[#48b2af] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Icon Container">
      <Icons2 />
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
    <div className="absolute content-stretch flex gap-[24px] items-start justify-end left-[20px] top-[467px] w-[354px]" data-name="Option Container">
      <FormInput2 />
      <ButtonContainer1 />
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d={svgPaths.p3117bd00} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px]">탈퇴하기</p>
      <Icons3 />
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34px] items-center justify-center left-[20px] px-[8px] py-0 rounded-[12px] top-[693px]" data-name="Button / Text Button">
      <Container2 />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">성별</p>
        </div>
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box4 />
    </div>
  );
}

function OptionContent() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">여성</p>
      <Icons4 />
    </div>
  );
}

function Option() {
  return (
    <div className="basis-0 bg-[#48b2af] grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Option">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <OptionContent />
        </div>
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, #E7E7E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box5 />
    </div>
  );
}

function OptionContent1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#b7b7b7] text-[15px] text-nowrap tracking-[-0.45px]">남성</p>
      <Icons5 />
    </div>
  );
}

function Option1() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Option">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <OptionContent1 />
        </div>
      </div>
    </div>
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
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[235px] w-[354px]" data-name="Selection Controls / Selection Group">
      <LabelContainer3 />
      <OptionsContainer />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">관계</p>
        </div>
      </div>
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

function Container3() {
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
      <Container3 />
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

function InputContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Input Container">
      <InputRow />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 1">
            <path d="M0 0.5H354" id="Vector 18" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SelectField() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Select Field">
      <LabelContainer4 />
      <InputContainer3 />
    </div>
  );
}

function FormSelectField() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[571px] w-[354px]" data-name="Form / Select Field">
      <SelectField />
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
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">관계 선택</p>
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

function CouponOptionTextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">연인</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container4 />
    </div>
  );
}

function CouponOptionRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <CouponOptionTextContainer />
          <SelectionControlsRadioButton />
        </div>
      </div>
    </div>
  );
}

function CouponOptionTextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">가족</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container5 />
    </div>
  );
}

function CouponOptionRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <CouponOptionTextContainer1 />
          <SelectionControlsRadioButton1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container6 />
    </div>
  );
}

function NoCouponOptionTextContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="No Coupon Option Text Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px]">친구</p>
      <SelectionControlsRadioButton2 />
    </div>
  );
}

function NoCouponOptionRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="No Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <NoCouponOptionTextContainer />
        </div>
      </div>
    </div>
  );
}

function CouponOptionTextContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">지인</p>
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

function SelectionControlsRadioButton3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <OuterCircle />
    </div>
  );
}

function CouponOptionRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <CouponOptionTextContainer2 />
          <SelectionControlsRadioButton3 />
        </div>
      </div>
    </div>
  );
}

function CouponOptionTextContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">동료</p>
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

function SelectionControlsRadioButton4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container7 />
    </div>
  );
}

function CouponOptionRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <CouponOptionTextContainer3 />
          <SelectionControlsRadioButton4 />
        </div>
      </div>
    </div>
  );
}

function CouponOptionTextContainer4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Coupon Option Text Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.45px] w-full">기타</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container8 />
    </div>
  );
}

function CouponOptionRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Coupon Option Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2px] py-0 relative w-full">
          <CouponOptionTextContainer4 />
          <SelectionControlsRadioButton5 />
        </div>
      </div>
    </div>
  );
}

function CouponOptionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Coupon Options Container">
      <CouponOptionRow />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(248, 248, 248, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #F8F8F8)" />
          </svg>
        </div>
      </div>
      <CouponOptionRow1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(248, 248, 248, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #F8F8F8)" />
          </svg>
        </div>
      </div>
      <NoCouponOptionRow />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(248, 248, 248, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #F8F8F8)" />
          </svg>
        </div>
      </div>
      <CouponOptionRow2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(248, 248, 248, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #F8F8F8)" />
          </svg>
        </div>
      </div>
      <CouponOptionRow3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(248, 248, 248, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
            <path d="M0 0.5H342" id="Divider" stroke="var(--stroke-0, #F8F8F8)" />
          </svg>
        </div>
      </div>
      <CouponOptionRow4 />
    </div>
  );
}

function CouponListContainer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Coupon List Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <CouponOptionsContainer />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Content Container">
      <IndependentHandle />
      <BottomSheetBottomSheetHeader />
      <CouponListContainer />
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

function ButtonSquareButton2() {
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
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">선택 완료</p>
    </div>
  );
}

function ButtonSquareButton3() {
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
      <ButtonSquareButton2 />
      <ButtonSquareButton3 />
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

function Container9() {
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
      <Container9 />
      <HomeIndicatorLight1 />
    </div>
  );
}

function ContentsBottomSheet() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 translate-x-[-50%] w-[390px]" data-name="Contents Bottom Sheet">
      <ContentContainer />
      <CommonBottomButton1 />
    </div>
  );
}

function HomeIndicatorLight2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLight2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="관계 선택">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <CommonBottomButton />
      <FormInput />
      <FormInput1 />
      <OptionContainer />
      <ButtonTextButton />
      <SelectionControlsSelectionGroup />
      <FormSelectField />
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[844px] left-0 top-0 w-[390px]" data-name="Background" />
      <ContentsBottomSheet />
    </div>
  );
}