import svgPaths from "./svg-50djp3uerr";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">{`2025.9.30 `}</p>
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
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black tracking-[-0.42px] w-full">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
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
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Card / PriceBlock">
      <Container1 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Product Info">
      <CardPriceBlock />
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.42px] w-full">12,900원</p>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Additional Info">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">풀이 대상 : 김석훈 (1992.09.02)</p>
        </div>
      </div>
    </div>
  );
}

function AdditionalInfo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Additional Info">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">구매 일시 : 2025.09.30 (14:33)</p>
        </div>
      </div>
    </div>
  );
}

function AdditionalInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Additional Info">
      <AdditionalInfo />
      <AdditionalInfo1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[2px] py-0 relative w-full">
          <ProductInfo1 />
          <AdditionalInfo2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[14px] text-nowrap tracking-[-0.42px]">운세 보기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="basis-0 bg-white grow h-[38px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button / Square Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-full">
      <ButtonSquareButton />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Product Info">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <ProductInfo2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <TextSectionTitle />
      <Card />
    </div>
  );
}

function CardPurchaseCard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card / Purchase Card">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[20px] py-0 relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CardPurchaseCard />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[115px] w-[390px]">
      <Frame3 />
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

function Frame() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]">
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
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
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
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">구매 내역</p>
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

function Frame7() {
  return <div className="h-[16px] shrink-0 w-full" />;
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="구매 내역 (1개)">
      <Frame />
      <Frame1 />
      <HomeIndicatorLight />
      <Frame6 />
    </div>
  );
}