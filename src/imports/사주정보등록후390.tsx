import svgPaths from "./svg-4ip2tcqzwl";
import imgImage from "figma:asset/23b9117ba4bdef1f5ecec145e7fd9de948dfdc19.png";

function Box1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Box() {
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

function TextGroupHelper() {
  return (
    <div className="h-[6px] relative shrink-0 w-0">
      <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
          <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px]">{text}</p>
    </div>
  );
}

function CommonLogo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59px]" data-name="Common / Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 20">
        <g id="Common / Logo">
          <path d={svgPaths.p1fb34640} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p1bbbb200} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p11620600} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p9a70500} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p115ca080} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.pb2cf980} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p211e0700} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p3088fdc0} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p2e718980} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p15169200} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[4px] items-start leading-[19px] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
      <p className="relative shrink-0 w-full">Copyright 2024@Stargiosoft All Rights Reserved.</p>
      <p className="relative shrink-0 w-full">대표자 서지현 | 사업자등록번호 827-88-01815</p>
      <p className="relative shrink-0 w-full">통신판매업번호 2024-서울영등포-2084</p>
      <p className="relative shrink-0 w-full">서울시 영등포구 양평로 149, 1507호</p>
      <p className="relative shrink-0 w-full">문의 stargiosoft@gmail.com</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-0 relative w-full">
          <CommonLogo />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ContainerText text="이용약관" />
    </div>
  );
}

function ButtonTextButton1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ContainerText text="개인정보 처리방침" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonTextButton />
      <div className="h-[8px] relative shrink-0 w-0">
        <div className="absolute inset-[-6.25%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector 65" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <ButtonTextButton1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-[-3px] content-stretch flex flex-col items-start left-0 pb-[40px] pt-[32px] px-[20px] w-[390px]" data-name="Footer">
      <Frame4 />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[16px] leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px] w-[264px]">원숭이띠</p>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-black tracking-[-0.32px] w-[min-content]">별빛 속에 피어난 작은 꿈 (본인)</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[72px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgImage} />
        <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 rounded-[12px]" />
      </div>
      <Frame />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Text Group">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">양력 1994.07.23 午(오)시</p>
      <TextGroupHelper />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">원숭이띠</p>
      <TextGroupHelper />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">물고가자리</p>
      <TextGroupHelper />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">여성</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative w-full">
          <TextGroup />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[115px] w-[350px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">콘텐츠 만들기</p>
      <Icons />
    </div>
  );
}

function ButtonListItemButton() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container3 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">사주 정보 관리</p>
      <Icons1 />
    </div>
  );
}

function ButtonListItemButton1() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container4 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">구매 내역</p>
      <Icons2 />
    </div>
  );
}

function ButtonListItemButton2() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container5 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">로그아웃</p>
      <Icons3 />
    </div>
  );
}

function ButtonListItemButton3() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container6 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[28.5px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">의견 전달하기</p>
      <Icons4 />
    </div>
  );
}

function ButtonListItemButton4() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] top-[302px]" data-name="Container">
      <ButtonListItemButton />
      <ButtonListItemButton1 />
      <ButtonListItemButton2 />
      <ButtonListItemButton3 />
      <ButtonListItemButton4 />
    </div>
  );
}

function HomeIndicatorLight1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLight1 />
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
    <Box1>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Box1>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
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

function Box3() {
  return (
    <Box1>
      <g id="setting">
        <path d={svgPaths.p3cccb600} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p185ecc80} id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Box1>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box3 />
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
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">마이페이지</p>
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
    <div className="bg-white relative size-full" data-name="사주정보 등록 후 _ 390">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <Footer />
      <HomeIndicatorLight />
      <Container2 />
      <div className="absolute bg-[#f9f9f9] h-[8px] left-1/2 top-[270px] translate-x-[-50%] w-[390px]" />
      <Container8 />
    </div>
  );
}