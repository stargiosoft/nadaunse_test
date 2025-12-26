import svgPaths from "./svg-co0nsd8obx";
import clsx from "clsx";
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[25px] left-0 w-[350px]", additionalClassNames)}>
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[13px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-px w-[40px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[310px] rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[286px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[240px]" data-name="Rectangle" />
    </div>
  );
}

function Container() {
  return <div className="absolute h-[22px] left-[12px] top-[5px] w-[40px]" data-name="Container" />;
}

function ButtonCountButton() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[32px] left-[286px] rounded-[8px] to-50% to-[#f0f0f0] top-0 w-[64px]" data-name="Button / Count Button">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer />
      <ButtonCountButton />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container1 />
      <div className="absolute h-[0.01px] left-0 top-[44px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function CardDealCard() {
  return <div className="absolute h-[92px] left-0 top-0 w-[350px]" data-name="Card / Deal Card" />;
}

function Frame2() {
  return (
    <div className="absolute h-[92px] left-0 top-[60px] w-[350px]">
      <CardDealCard />
    </div>
  );
}

function LabelBox() {
  return <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] rounded-[4px] shrink-0 to-50% to-[#f0f0f0] w-[66px]" data-name="Label Box" />;
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[92px] top-[3px] w-[129px]">
      <LabelBox />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
    </div>
  );
}

function OriginalPriceContainer() {
  return <div className="absolute h-[22px] left-px top-0 w-[53px]" data-name="Original Price Container" />;
}

function OriginalPriceContainer1() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[55px]" data-name="Original Price Container">
      <OriginalPriceContainer />
    </div>
  );
}

function OriginalPriceContainer2() {
  return (
    <div className="absolute h-[22px] left-[2px] top-0 w-[55px]" data-name="Original Price Container">
      <OriginalPriceContainer1 />
    </div>
  );
}

function CouponPriceContainer() {
  return <div className="absolute h-[25px] left-[2px] top-[24px] w-[254px]" data-name="Coupon Price Container" />;
}

function PriceInfo() {
  return (
    <div className="absolute h-[49px] left-[92px] top-[48px] w-[258px]" data-name="Price Info">
      <OriginalPriceContainer2 />
      <CouponPriceContainer />
    </div>
  );
}

function CardDealCard1() {
  return (
    <div className="absolute h-[97px] left-0 top-[55px] w-[350px]" data-name="Card / Deal Card">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[54px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[80px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute border border-[rgba(239,239,239,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      </div>
      <Frame6 />
      <PriceInfo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[152px] left-[20px] top-0 w-[350px]">
      <TextSectionTitle />
      <Frame2 />
      <CardDealCard1 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[288px]" data-name="Rectangle" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer1 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="absolute h-[36px] left-[20px] top-0 w-[350px]" data-name="Text / Section Title">
      <Container2 />
      <div className="absolute h-[0.01px] left-0 top-[36px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function ProductPriceContainer() {
  return (
    <div className="absolute h-[25px] left-0 top-0 w-[350px]" data-name="Product Price Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[310px] rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function PriceDetailsContainer() {
  return (
    <div className="absolute h-[91px] left-[20px] top-[52px] w-[350px]" data-name="Price Details Container">
      <ProductPriceContainer />
      <BackgroundImage additionalClassNames="top-[33px]" />
      <BackgroundImage additionalClassNames="top-[66px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute h-[143px] left-0 top-0 w-[390px]" data-name="Title">
      <TextSectionTitle1 />
      <PriceDetailsContainer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[24px] w-[350px]">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[78px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[296px] rounded-[20px] to-50% to-[#f0f0f0] top-[5px] w-[54px]" data-name="Rectangle" />
    </div>
  );
}

function TotalPrice() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[72px] left-0 top-[163px] w-[390px]" data-name="Total Price">
      <Frame5 />
    </div>
  );
}

function TextPriceSummary() {
  return (
    <div className="absolute h-[235px] left-0 top-[228px] w-[390px]" data-name="Text / PriceSummary">
      <Title />
      <TotalPrice />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[350px]" data-name="Heading 2">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[212px]" data-name="Rectangle" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[34px] left-[20px] top-0 w-[350px]">
      <Heading />
      <div className="absolute h-[0.01px] left-0 top-[34px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[20px] top-[77px] w-[282px]">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[198px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[183px]" data-name="Rectangle" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[222px] left-0 top-[495px] w-[390px]">
      <Frame />
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[717px] left-0 top-[115px] w-[390px]">
      <Frame3 />
      <div className="absolute bg-gradient-to-l border border-[rgba(239,239,239,0.05)] border-solid from-[rgba(239,239,239,0.05)] h-[12px] left-0 to-50% to-[#f0f0f0] top-[184px] w-[390px]" />
      <TextPriceSummary />
      <Frame1 />
    </div>
  );
}

function ButtonContainer() {
  return <div className="content-stretch flex gap-[4px] items-center shrink-0" data-name="Button Container" />;
}

function ButtonSquareButton() {
  return (
    <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[56px] relative rounded-[16px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Button / Square Button">
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
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <ButtonSquareButton />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
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
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] w-[390px]" data-name="Common / Bottom Button">
      <Container3 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6618 11.3359">
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

function LeftAction() {
  return <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] rounded-[12px] shrink-0 size-[44px] to-50% to-[#f0f0f0]" data-name="Left Action" />;
}

function Box() {
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

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[50px]" data-name="Rectangle" />
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

export default function ox() {
  return (
    <div className="bg-white relative size-full" data-name="결제 (기본할인o, 쿠폰x)">
      <TopNavigationContainer />
      <Frame4 />
      <CommonBottomButton />
    </div>
  );
}