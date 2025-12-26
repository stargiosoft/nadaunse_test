import svgPaths from "./svg-ogrzo3mon4";

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
    <div className="absolute bg-white content-stretch flex h-[32px] items-center justify-center left-[285px] px-[12px] py-0 rounded-[8px] top-[-106px]" data-name="Button / Square Button">
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
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">바로 만나기 전</p>
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">잠깐, 약관에 동의해 주세요!</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px]" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#48b2af]">필수</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0 text-black">만 14세 이상입니다</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">
          <Container1 />
          <SelectionControlsCheckBox />
        </div>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px]" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#48b2af]">필수</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0 text-black">이용약관 동의</p>
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-up">
          <path d={svgPaths.peb9d380} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer1 />
      <Icons1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox1 />
    </div>
  );
}

function DisclosureCheckAccordion1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">
          <Container2 />
          <SelectionControlsCheckBox1 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#525252] text-[14px] tracking-[-0.42px] w-full">제1조 (목적)</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Item />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#525252] text-[14px] tracking-[-0.42px] w-full">{`이 약관은 회사가 제공하는 '나다운' 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 본 약관은 서비스 이용과 관련된 모든 사항에 대해 적용됩니다.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[22px] relative shrink-0 text-[#525252] text-[14px] tracking-[-0.42px] w-full">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold relative shrink-0 w-full">제2조 [정의]</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0 w-full">Subtext</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function DisclosureCheckAccordion2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <DisclosureCheckAccordion1 />
      <Container4 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px]" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#48b2af]">필수</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0 text-black">개인정보보 처리방침 동의</p>
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
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

function Container5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer2 />
      <Icons2 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox2 />
    </div>
  );
}

function DisclosureCheckAccordion3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">
          <Container5 />
          <SelectionControlsCheckBox2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0">선택</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0">마케팅 활용 동의</p>
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container6 />
      <Icons3 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox3 />
    </div>
  );
}

function DisclosureCheckAccordion4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">
          <Container7 />
          <SelectionControlsCheckBox3 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold relative shrink-0">선택</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal relative shrink-0">광고성 정보 수신 동의</p>
    </div>
  );
}

function Box4() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container8 />
      <Icons4 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox4 />
    </div>
  );
}

function DisclosureCheckAccordion5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-0 relative w-full">
          <Container9 />
          <SelectionControlsCheckBox4 />
        </div>
      </div>
    </div>
  );
}

function ChecklistItems() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[268px] items-start overflow-clip relative shrink-0 w-full" data-name="Checklist Items">
      <DisclosureCheckAccordion />
      <DisclosureCheckAccordion2 />
      <DisclosureCheckAccordion3 />
      <DisclosureCheckAccordion4 />
      <DisclosureCheckAccordion5 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">약관 전체 동의</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer3 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox5 />
    </div>
  );
}

function DisclosureCheckAccordion6() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full" data-name="Disclosure / Check Accordion">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Container10 />
          <SelectionControlsCheckBox5 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <ChecklistItems />
      <DisclosureCheckAccordion6 />
    </div>
  );
}

function IndependentScrollBar() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="Independent / Scroll Bar">
      <div className="bg-[#b7b7b7] h-[50px] rounded-[999px] shrink-0 w-[3px]" data-name="Indicator" />
    </div>
  );
}

function DisclosureChecklist() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-[350px]" data-name="Disclosure / Checklist">
      <Container11 />
      <IndependentScrollBar />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#b7b7b7] text-[16px] text-nowrap tracking-[-0.32px]">다음 단계로 이동하기</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <div className="bg-[#f8f8f8] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <Container12 />
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
          <ButtonSquareButton1 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
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
      <Container13 />
      <HomeIndicatorLight />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
      <DisclosureChecklist />
      <CommonBottomButton />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[745px] items-center justify-between left-0 top-[99px] w-[390px]">
      <TextLoginText />
      <Frame />
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

function Box5() {
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

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box5 />
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

function Box6() {
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

function Icons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box6 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons6 />
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

function TopNavigationContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Top Navigation Container">
      <IndependentIPhoneStatusBar />
      <TopNavigation1Depth />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="약관 펼치기 _ 390">
      <TopNavigationContainer />
      <ButtonSquareButton />
      <Frame1 />
    </div>
  );
}