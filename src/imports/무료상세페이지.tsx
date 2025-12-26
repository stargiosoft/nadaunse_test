import svgPaths from "./svg-986x2tw1r6";
import clsx from "clsx";
type HomeIndicatorLightBackgroundImageProps = {
  additionalClassNames?: string;
};

function HomeIndicatorLightBackgroundImage({ additionalClassNames = "" }: HomeIndicatorLightBackgroundImageProps) {
  return (
    <div className={clsx("h-[28px] relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function ThumbnailBackgroundImage() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[120px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-[rgba(239,239,239,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function DiscountPriceContainerBackgroundImage() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[96px]">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[26px]" data-name="Rectangle" />
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <ul className="absolute block font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[0] left-0 text-[#999] text-[16px] text-nowrap top-0 tracking-[-0.32px]">
      <li className="ms-[24px]">
        <span className="leading-[28.5px] text-[16px]">{text}</span>
      </li>
    </ul>
  );
}

function LabelBox() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[24px] left-0 rounded-[8px] to-50% to-[#f0f0f0] top-0 w-[70px]" data-name="Label Box" />;
}

function Container() {
  return (
    <div className="absolute h-[24px] left-[2px] top-0 w-[346px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[237px]" data-name="Rectangle" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[350px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[350px]" data-name="Container">
      <LabelBox />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[56px] left-[20px] top-0 w-[350px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="absolute h-[56px] left-0 top-[290px] w-[390px]" data-name="Card / PriceBlock">
      <Container3 />
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="absolute h-[346px] left-0 top-0 w-[390px]" data-name="Card / Deal Card">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[270px] left-0 to-50% to-[#f0f0f0] top-0 w-[390px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute border border-[rgba(239,239,239,0.05)] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="absolute h-[371px] left-0 top-0 w-[390px]" data-name="Card Container">
      <CardDealCard />
      <div className="absolute bg-gradient-to-l border border-[rgba(239,239,239,0.05)] border-solid from-[rgba(239,239,239,0.05)] h-px left-0 to-50% to-[#f0f0f0] top-[370px] w-[390px]" data-name="Divider" />
    </div>
  );
}

function Container4() {
  return <div className="absolute h-[24px] left-[2px] top-0 w-[346px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[2px] top-[-36px] w-[333px]" data-name="Text Content">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[278px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[187px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[252px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[214px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[221px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[209px]" data-name="Rectangle" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[228px] left-0 top-0 w-[350px]" data-name="Container">
      <TextContent />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[228px] left-0 top-[36px] w-[350px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[264px] left-[20px] top-0 w-[350px]" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="absolute h-[264px] left-0 top-[423px] w-[390px]" data-name="Text Component 3">
      <Container9 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[190px]" data-name="Rectangle" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[293px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[20px] w-[241px]" data-name="Rectangle" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[57px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function ListListItem() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="List / List Item">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[282px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[20px] w-[289px]" data-name="Rectangle" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[57px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function ListListItem1() {
  return (
    <div className="absolute h-[57px] left-0 top-[81px] w-[350px]" data-name="List / List Item">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[279px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[20px] w-[171px]" data-name="Rectangle" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[57px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[350px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function ListListItem2() {
  return (
    <div className="absolute h-[57px] left-0 top-[162px] w-[350px]" data-name="List / List Item">
      <Container22 />
    </div>
  );
}

function ListContent() {
  return (
    <div className="absolute h-[219px] left-0 top-[40px] w-[350px]" data-name="List Content">
      <ListListItem />
      <ListListItem1 />
      <ListListItem2 />
      <div className="absolute h-[0.01px] left-0 top-[69px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute h-[0.01px] left-0 top-[150px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function ListContainer() {
  return (
    <div className="absolute h-[259px] left-[20px] top-0 w-[350px]" data-name="List Container">
      <TextSectionTitle />
      <ListContent />
    </div>
  );
}

function ListList() {
  return (
    <div className="absolute bg-white h-[259px] left-0 top-[803px] w-[390px]" data-name="List / List">
      <ListContainer />
    </div>
  );
}

function TextBlock() {
  return <div className="absolute h-[43px] left-0 top-[8.5px] w-[196px]" data-name="Text Block" />;
}

function Action() {
  return <div className="absolute left-[90px] size-[16px] top-[22px]" data-name="Action" />;
}

function ImageAndIcon() {
  return (
    <div className="absolute h-[60px] left-[204px] top-0 w-[106px]" data-name="Image and Icon">
      <Action />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[60px] left-[20px] top-[12px] w-[310px]" data-name="Content">
      <TextBlock />
      <ImageAndIcon />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[84px] left-[20px] rounded-[16px] to-50% to-[#f0f0f0] top-[20px] w-[350px]" data-name="Container">
      <Content />
    </div>
  );
}

function PromotionPromoBanner() {
  return (
    <div className="absolute bg-[#f8f8f8] h-[124px] left-0 top-[1114px] w-[390px]" data-name="Promotion / Promo Banner">
      <Container23 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[318px]" data-name="Rectangle" />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer1 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container24 />
    </div>
  );
}

function LabelBox1() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-0 rounded-[4px] to-50% to-[#f0f0f0] top-0 w-[66px]" data-name="Label Box" />;
}

function TitleContainer2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[200px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-px rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[107px]" data-name="Rectangle" />
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[200px]" data-name="Title Container">
      <TitleContainer2 />
    </div>
  );
}

function OriginalPriceContainer() {
  return (
    <div className="absolute h-[22px] left-px top-0 w-[53px]" data-name="Original Price Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[36px]" data-name="Rectangle" />
    </div>
  );
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

function DiscountPriceContainer() {
  return (
    <div className="absolute h-[20px] left-[2px] top-[24px] w-[196px]" data-name="Discount Price Container">
      <DiscountPriceContainerBackgroundImage />
    </div>
  );
}

function CouponPriceContainer() {
  return (
    <div className="absolute h-[25px] left-[2px] top-[46px] w-[196px]" data-name="Coupon Price Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[36px]" data-name="Rectangle" />
    </div>
  );
}

function PriceInfo() {
  return (
    <div className="absolute h-[71px] left-0 top-[24px] w-[200px]" data-name="Price Info">
      <OriginalPriceContainer2 />
      <DiscountPriceContainer />
      <CouponPriceContainer />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="absolute h-[95px] left-0 top-[24px] w-[200px]" data-name="Product Info">
      <TitleContainer3 />
      <PriceInfo />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[119px] left-0 top-0 w-[200px]" data-name="Container">
      <LabelBox1 />
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock1() {
  return (
    <div className="absolute h-[119px] left-0 top-[128px] w-[200px]" data-name="Card / PriceBlock">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[247px] left-0 top-0 w-[200px]" data-name="Container">
      <ThumbnailBackgroundImage />
      <CardPriceBlock1 />
    </div>
  );
}

function CardDealCard1() {
  return (
    <div className="absolute h-[247px] left-0 top-0 w-[200px]" data-name="Card / Deal Card">
      <Container26 />
    </div>
  );
}

function LabelBox2() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-0 rounded-[4px] to-50% to-[#f0f0f0] top-0 w-[66px]" data-name="Label Box" />;
}

function TitleContainer4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[200px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-px rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[174px]" data-name="Rectangle" />
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[200px]" data-name="Title Container">
      <TitleContainer4 />
    </div>
  );
}

function OriginalPriceContainer3() {
  return (
    <div className="absolute h-[22px] left-px top-0 w-[53px]" data-name="Original Price Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[45px]" data-name="Rectangle" />
    </div>
  );
}

function OriginalPriceContainer4() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[55px]" data-name="Original Price Container">
      <OriginalPriceContainer3 />
    </div>
  );
}

function OriginalPriceContainer5() {
  return (
    <div className="absolute h-[22px] left-[2px] top-0 w-[55px]" data-name="Original Price Container">
      <OriginalPriceContainer4 />
    </div>
  );
}

function DiscountPriceContainer1() {
  return (
    <div className="absolute h-[20px] left-[2px] top-[24px] w-[196px]" data-name="Discount Price Container">
      <DiscountPriceContainerBackgroundImage />
    </div>
  );
}

function CouponPriceContainer1() {
  return (
    <div className="absolute h-[25px] left-[2px] top-[46px] w-[196px]" data-name="Coupon Price Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[44px]" data-name="Rectangle" />
    </div>
  );
}

function PriceInfo1() {
  return (
    <div className="absolute h-[71px] left-0 top-[24px] w-[200px]" data-name="Price Info">
      <OriginalPriceContainer5 />
      <DiscountPriceContainer1 />
      <CouponPriceContainer1 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="absolute h-[95px] left-0 top-[24px] w-[200px]" data-name="Product Info">
      <TitleContainer5 />
      <PriceInfo1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[119px] left-0 top-0 w-[200px]" data-name="Container">
      <LabelBox2 />
      <ProductInfo1 />
    </div>
  );
}

function CardPriceBlock2() {
  return (
    <div className="absolute h-[119px] left-0 top-[128px] w-[200px]" data-name="Card / PriceBlock">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[247px] left-0 top-0 w-[200px]" data-name="Container">
      <ThumbnailBackgroundImage />
      <CardPriceBlock2 />
    </div>
  );
}

function CardDealCard2() {
  return (
    <div className="absolute h-[247px] left-[212px] top-0 w-[200px]" data-name="Card / Deal Card">
      <Container28 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute h-[247px] left-0 rounded-[12px] top-0 w-[200px]" data-name="Button Container">
      <p className="absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] left-[70.5px] text-[#6d6d6d] text-[15px] text-nowrap top-[111.5px] tracking-[-0.3px]">더 볼래요!</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="bg-white overflow-clip relative size-[44px]" data-name="Icons">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[24px] left-[7px] rounded-[24px] to-50% to-[#f0f0f0] top-[10px] w-[30px]" data-name="Rectangle" />
    </div>
  );
}

function ButtonMoreViewButton() {
  return (
    <div className="absolute h-[247px] left-[424px] top-0 w-[224px]" data-name="Button / More view Button">
      <ButtonContainer />
      <div className="absolute flex items-center justify-center left-[180px] size-[44px] top-[101.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="absolute h-[247px] left-0 top-[36px] w-[350px]" data-name="Section Content">
      <CardDealCard1 />
      <CardDealCard2 />
      <ButtonMoreViewButton />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="absolute h-[283px] left-[20px] top-[1290px] w-[350px]" data-name="Section Container">
      <TextSectionTitle1 />
      <SectionContent />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[1573px] left-1/2 top-[99px] translate-x-[-50%] w-[390px]" data-name="Container">
      <CardContainer />
      <TextComponent />
      <div className="absolute bg-gradient-to-l border border-[rgba(239,239,239,0.05)] border-solid from-[rgba(239,239,239,0.05)] h-[12px] left-0 to-50% to-[#f0f0f0] top-[739px] w-[390px]" data-name="Divider" />
      <ListList />
      <PromotionPromoBanner />
      <SectionContainer />
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

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[50px]" data-name="Rectangle" />
      <LeftAction />
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
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%] w-[390px]" data-name="Top Navigation Container">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

function ButtonContainer1() {
  return <div className="content-stretch flex gap-[4px] items-center shrink-0" data-name="Button Container" />;
}

function ButtonSquareButton() {
  return (
    <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[56px] relative rounded-[16px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
          <ButtonContainer1 />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer2() {
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

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer2 />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container30 />
      <HomeIndicatorLightBackgroundImage additionalClassNames="bg-white" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-576px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLightBackgroundImage />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="무료 상세 페이지">
      <HomeIndicatorContainer />
      <Container29 />
      <TopNavigationContainer />
      <CommonBottomButton />
    </div>
  );
}