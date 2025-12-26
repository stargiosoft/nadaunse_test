import svgPaths from "./svg-ezi6geedzp";
import imgGeminiGeneratedImageGmbs6Lgmbs6Lgmbs1 from "figma:asset/35682d96407edc7fb5921d3d1b58f0b20b40da6e.png";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#151515] w-full">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24.5px] min-w-full relative shrink-0 text-[16px] tracking-[-0.32px] w-[min-content]">정확한 해석을 위해 시간이 필요해요</p>
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[0px] text-[18px] tracking-[-0.36px] w-[310px]">
        <span>{`결과가 나오면 `}</span>
        <span className="text-[#48b2af]">알림톡 보내드릴게요</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e7e7e7] h-[14px] ml-0 mt-0 rounded-[999px] w-[298px]" />
      <div className="[grid-area:1_/_1] bg-[#48b2af] h-[14px] ml-0 mt-0 rounded-[999px] w-[72.389px]" />
    </div>
  );
}

function LinearProgress() {
  return (
    <div className="relative shrink-0 w-full" data-name="Linear Progress">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[2px] py-0 relative w-full">
          <Group />
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[#6d6d6d] text-[15px] text-center text-nowrap tracking-[-0.3px]">24%</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame1 />
      <LinearProgress />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[32px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[99px] w-[390px]">
      <div className="aspect-[390/324] relative shrink-0 w-full" data-name="Gemini_Generated_Image_gmbs6lgmbs6lgmbs 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[165.13%] left-[-3.1%] max-w-none top-[-28.23%] w-[106.67%]" src={imgGeminiGeneratedImageGmbs6Lgmbs6Lgmbs1} />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">기다리는 동안 무료 운세 보기</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container />
    </div>
  );
}

function LabelBox() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">무료 체험판</p>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">혹시 지금 바람 피우고 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer1 />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox />
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[120px] pointer-events-none relative rounded-[12px] shrink-0 w-[200px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card / Deal Card">
      <Container2 />
    </div>
  );
}

function LabelBox1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">무료 체험판</p>
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">내 연인은 바람기 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function TitleContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer3 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox1 />
      <ProductInfo1 />
    </div>
  );
}

function CardPriceBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[120px] pointer-events-none relative rounded-[12px] shrink-0 w-[200px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <CardPriceBlock1 />
    </div>
  );
}

function CardDealCard1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card / Deal Card">
      <Container4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-full items-center justify-center mr-[-20px] p-[12px] relative rounded-[12px] shrink-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-dashed inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[#6d6d6d] text-[15px] text-nowrap tracking-[-0.3px]">더 볼래요!</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative size-[44px]" data-name="Icons">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Icons">
            <rect fill="white" height="44" width="44" />
            <path d={svgPaths.p3bb19300} fill="var(--fill-0, #D4D4D4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonMoreViewButton() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[20px] py-0 relative self-stretch shrink-0" data-name="Button / More view Button">
      <Frame6 />
      <div className="flex items-center justify-center mr-[-20px] relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <CardDealCard />
      <CardDealCard1 />
      <ButtonMoreViewButton />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[20px] top-[640px] w-[370px]">
      <TextSectionTitle />
      <Frame4 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">홈으로 가기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="basis-0 bg-[#f0f8f8] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">다른 운세 보기</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <div className="basis-0 bg-[#48b2af] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer1 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Button Group">
      <ButtonSquareButton />
      <ButtonSquareButton1 />
    </div>
  );
}

function ButtonContainer2() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer2 />
      <HomeIndicatorContainer />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container5 />
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

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons1 />
    </div>
  );
}

function LinearClose() {
  return (
    <div className="absolute contents inset-0" data-name="linear/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Box">
          <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">풀이중...</p>
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

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="로딩중 _ 391">
      <Frame />
      <Frame7 />
      <Frame5 />
      <CommonBottomButton />
    </div>
  );
}