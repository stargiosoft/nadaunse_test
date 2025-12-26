import svgPaths from "./svg-94402brxf8";
import imgThumbnail from "figma:asset/bada0ef4d1435fa0ce6093a3b4ba6705c61d336f.png";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4 from "figma:asset/60488b980e0454d1287dc1dccdb92e92d6a121bf.png";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po5 from "figma:asset/31ed117381a404a1d1dbfe7a61652b15d7f28433.png";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po6 from "figma:asset/6012c1d69cfa986c13102e487d4744a1f018f550.png";

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px]">내 연인은 어디에 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function LabelBox() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[4px] py-0 relative w-full">
          <Container />
          <LabelBox />
        </div>
      </div>
    </div>
  );
}

function CardBrowseCard() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Card / Browse Card">
      <div className="aspect-[350/220] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[17px]" />
      </div>
      <Container1 />
    </div>
  );
}

function FeaturedCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Featured Card">
      <CardBrowseCard />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px]">내 곁의 사람, 다른 이에게 끌리고 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function LabelBox1() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container2 />
      <LabelBox1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <Container3 />
    </div>
  );
}

function CardBrowseCard1() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container4 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow h-[47px] leading-[25.5px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black tracking-[-0.3px]">혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.</p>
        </div>
      </div>
    </div>
  );
}

function LabelBox2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TitleContainer />
      <LabelBox2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po5} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <Content />
    </div>
  );
}

function CardBrowseCard2() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px]">바람의 징조, 이미 시작 됐을까?</p>
        </div>
      </div>
    </div>
  );
}

function LabelBox3() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container6 />
      <LabelBox3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po6} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <Container7 />
    </div>
  );
}

function CardBrowseCard3() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container8 />
    </div>
  );
}

function CardBrowseCardList() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start left-1/2 px-[20px] py-0 top-[225px] translate-x-[-50%]" data-name="Card / Browse Card List">
      <FeaturedCard />
      <div className="h-0 relative shrink-0 w-[350px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
          </svg>
        </div>
      </div>
      <CardBrowseCard1 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
          </svg>
        </div>
      </div>
      <CardBrowseCard2 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
          </svg>
        </div>
      </div>
      <CardBrowseCard3 />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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

function CommonLogo() {
  return (
    <div className="h-[27px] relative shrink-0 w-[80px]" data-name="Common / Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 27">
        <g id="Common / Logo">
          <path d={svgPaths.p9985f00} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p1239500} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p1f430500} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p29af36b0} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p3159cc00} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.p1f706200} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p2c154700} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p28fd9100} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p9b88f00} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.pbebe280} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <g id="Vector" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[19px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Frame 427320467">
          <path d={svgPaths.p1ceabf00} fill="var(--fill-0, #848484)" id="Vector" />
          <path d={svgPaths.p6324f00} fill="var(--fill-0, #848484)" id="Rectangle 569" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
      <Icon />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <CommonLogo />
      <RightAction />
    </div>
  );
}

function NavigationNavigation() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[52px] items-start justify-center pl-[20px] pr-[16px] py-[4px] relative shrink-0 w-[390px]" data-name="Navigation / Navigation">
      <Icon1 />
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#151515] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">전체</p>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">개인운세</p>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">연애</p>
    </div>
  );
}

function NavigationTabItem3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">이별</p>
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">재물</p>
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">직업</p>
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">Tab Item</p>
    </div>
  );
}

function TabContainer() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Tab Container">
      <NavigationTabItem />
      <NavigationTabItem1 />
      <NavigationTabItem2 />
      <NavigationTabItem3 />
      <NavigationTabItem4 />
      <NavigationTabItem5 />
      <NavigationTabItem6 />
    </div>
  );
}

function NavigationTabBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navigation / Tab Bar">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
          <TabContainer />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px] whitespace-pre">종합</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px] whitespace-pre">심화 해석판</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px] whitespace-pre">무료 체험판</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full" data-name="Segmented Control">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[6px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function NavigationSegmentedControl() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[12px] relative shrink-0 w-[390px]" data-name="Navigation / Segmented Control">
      <SegmentedControl />
    </div>
  );
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationNavigation />
      <NavigationTabBar />
      <NavigationSegmentedControl />
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
    <div className="bg-white relative size-full" data-name="홈 _ 390">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <CardBrowseCardList />
    </div>
  );
}