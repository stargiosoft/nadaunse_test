import svgPaths from "./svg-d533etth9e";
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

function TitleContainerBackgroundImage() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[220px]" data-name="Rectangle" />
    </div>
  );
}

function LabelBox() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[24px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[70px]" data-name="Label Box" />;
}

function Container() {
  return (
    <div className="absolute h-[156px] left-[20px] top-0 w-[350px]" data-name="Container">
      <LabelBox />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[16px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[32px] w-[222px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[90px] w-[40px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-[50px] rounded-[20px] to-50% to-[#f0f0f0] top-[90px] w-[73px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-[50px] rounded-[20px] to-50% to-[#f0f0f0] top-[123px] w-[61px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[20px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[123px] w-[40px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[13px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[68px] w-[341px]" data-name="Rectangle" />
    </div>
  );
}

function StreamlineFlexColorDiscountPercentCouponFlat() {
  return <div className="absolute left-[41.5px] size-[20px] top-px" data-name="streamline-flex-color:discount-percent-coupon-flat" />;
}

function Icons() {
  return <div className="absolute left-[195px] size-[12px] top-[5px]" data-name="Icons" />;
}

function TextContainer() {
  return (
    <div className="absolute h-[22px] left-[69.5px] top-0 w-[207px]" data-name="Text Container">
      <Icons />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[318px]" data-name="Container">
      <StreamlineFlexColorDiscountPercentCouponFlat />
      <TextContainer />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[318px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function ButtonEventButton() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[46px] left-[20px] rounded-[12px] to-50% to-[#f0f0f0] top-[172px] w-[350px]" data-name="Button / Event Button">
      <Container2 />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="absolute h-[218px] left-0 top-[290px] w-[390px]" data-name="Card / PriceBlock">
      <Container />
      <ButtonEventButton />
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="h-[508px] relative shrink-0 w-[390px]" data-name="Card / Deal Card">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[270px] left-0 to-50% to-[#f0f0f0] top-0 w-[390px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute border border-[rgba(239,239,239,0.05)] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[24px] left-[2px] top-0 w-[346px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[15px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[220px]" data-name="Rectangle" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <Container3 />
    </div>
  );
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
    <div className="absolute h-[171px] left-0 top-0 w-[350px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[233px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[38px] w-[340px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[76px] w-[306px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-[2px] rounded-[20px] to-50% to-[#f0f0f0] top-[114px] w-[285px]" data-name="Rectangle" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[171px] left-0 top-[36px] w-[350px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[207px] left-[20px] top-0 w-[350px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="h-[207px] relative shrink-0 w-[390px]" data-name="Text Component 3">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainerBackgroundImage />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container9 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[87px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[108.667px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[87px] left-[120.67px] rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[108.667px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[87px] left-[241.33px] rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[108.667px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute h-[87px] left-0 top-[36px] w-[350px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[123px] left-[20px] top-[28px] w-[350px]" data-name="Container">
      <TextSectionTitle />
      <Container13 />
    </div>
  );
}

function CardCore() {
  return (
    <div className="bg-[#f7f8f9] h-[183px] relative shrink-0 w-[390px]" data-name="Card / Core">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainerBackgroundImage />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container15 />
    </div>
  );
}

function WorryCardTitle() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[44px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[244px]" data-name="Worry Card Title" />;
}

function WorryCardTitleContainer() {
  return (
    <div className="absolute h-[44px] left-0 rounded-[12px] top-0 w-[244px]" data-name="Worry Card Title Container">
      <WorryCardTitle />
    </div>
  );
}

function WorryCardTextContent() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[44px] left-[12px] rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[232px]" data-name="Worry Card Text Content" />;
}

function WorryCardText() {
  return (
    <div className="absolute h-[44px] left-0 top-[56px] w-[244px]" data-name="Worry Card Text">
      <WorryCardTextContent />
    </div>
  );
}

function WorryCardTextContainer() {
  return (
    <div className="absolute h-[108px] left-0 top-0 w-[244px]" data-name="Worry Card Text Container">
      <WorryCardTitleContainer />
      <WorryCardText />
    </div>
  );
}

function WorryCardContent() {
  return (
    <div className="absolute h-[108px] left-[20px] top-[20px] w-[310px]" data-name="Worry Card Content">
      <WorryCardTextContainer />
      <div className="absolute bg-gradient-to-l border border-[rgba(239,239,239,0.05)] border-solid from-[rgba(239,239,239,0.05)] h-[65px] left-[260px] rounded-[16px] to-50% to-[#f0f0f0] top-[43px] w-[50px]" data-name="Image" />
    </div>
  );
}

function WorryCardContainer() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[148px] left-0 rounded-[16px] top-[36px] w-[350px]" data-name="Worry Card Container">
      <WorryCardContent />
    </div>
  );
}

function CardWorry() {
  return (
    <div className="h-[184px] relative shrink-0 w-[350px]" data-name="Card / worry">
      <TextSectionTitle1 />
      <WorryCardContainer />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[234px]" data-name="Rectangle" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[312px]" data-name="Rectangle" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function ListListItem() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="List / List Item">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[10px] w-[196px]" data-name="Rectangle" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function ListListItem1() {
  return (
    <div className="absolute h-[29px] left-0 top-[53px] w-[350px]" data-name="List / List Item">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[196px]" data-name="Rectangle" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function ListListItem2() {
  return (
    <div className="absolute h-[29px] left-0 top-[106px] w-[350px]" data-name="List / List Item">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[224px]" data-name="Rectangle" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function ListListItem3() {
  return (
    <div className="absolute h-[29px] left-0 top-[159px] w-[350px]" data-name="List / List Item">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[190px]" data-name="Rectangle" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function ListListItem4() {
  return (
    <div className="absolute h-[29px] left-0 top-[212px] w-[350px]" data-name="List / List Item">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[249px]" data-name="Rectangle" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function ListListItem5() {
  return (
    <div className="absolute h-[29px] left-0 top-[265px] w-[350px]" data-name="List / List Item">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[268px]" data-name="Rectangle" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function ListListItem6() {
  return (
    <div className="absolute h-[29px] left-0 top-[318px] w-[350px]" data-name="List / List Item">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[7px] w-[282px]" data-name="Rectangle" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[29px] left-[32px] top-0 w-[318px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <BackgroundImageAndText text="&nbsp;" />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[29px] left-0 top-0 w-[350px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function ListListItem7() {
  return (
    <div className="absolute h-[29px] left-0 top-[371px] w-[350px]" data-name="List / List Item">
      <Container48 />
    </div>
  );
}

function ListContent() {
  return (
    <div className="absolute h-[400px] left-0 top-[40px] w-[350px]" data-name="List Content">
      <ListListItem />
      <ListListItem1 />
      <ListListItem2 />
      <ListListItem3 />
      <ListListItem4 />
      <ListListItem5 />
      <ListListItem6 />
      <ListListItem7 />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[41px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[94px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[147px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[200px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[253px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[306px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
      <div className="absolute border border-[rgba(239,239,239,0.05)] border-solid h-[0.01px] left-0 top-[359px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function ListContainer() {
  return (
    <div className="absolute h-[440px] left-[20px] top-0 w-[350px]" data-name="List Container">
      <TextSectionTitle2 />
      <ListContent />
    </div>
  );
}

function ListList() {
  return (
    <div className="bg-white h-[440px] relative shrink-0 w-[390px]" data-name="List / List">
      <ListContainer />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Title Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-0 w-[270px]" data-name="Rectangle" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
      <TitleContainer1 />
    </div>
  );
}

function TextSectionTitle3() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Text / Section Title">
      <Container49 />
    </div>
  );
}

function Icons1() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-[334px] rounded-[8px] size-[16px] to-50% to-[#f0f0f0] top-[19px]" data-name="Icons" />;
}

function Container50() {
  return (
    <div className="absolute h-[53px] left-0 overflow-clip rounded-[12px] top-0 w-[350px]" data-name="Container">
      <Icons1 />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[20px] w-[286px]" data-name="Rectangle" />
    </div>
  );
}

function AccordionTextContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[20px] top-[21px] w-[309px]" data-name="Accordion Text Content">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[279px]" data-name="Rectangle" />
      <div className="aspect-[309/14] bg-gradient-to-l from-[rgba(239,239,239,0.05)] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[263px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[293px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[287px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[241px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[193px]" data-name="Rectangle" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#f7f8f9] h-[296px] left-0 rounded-[12px] top-[61px] w-[350px]" data-name="Container">
      <AccordionTextContent />
    </div>
  );
}

function DisclosureAccordion() {
  return (
    <div className="absolute h-[357px] left-0 top-0 w-[350px]" data-name="Disclosure / Accordion">
      <Container50 />
      <Container51 />
    </div>
  );
}

function AccordionTextContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-0 top-0 w-[278px]" data-name="Accordion Text Container">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[219px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[173px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[218px]" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[246px]" data-name="Rectangle" />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[185px] left-[20px] top-[20px] w-[310px]" data-name="Container">
      <AccordionTextContainer />
    </div>
  );
}

function Icons2() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-[334px] rounded-[8px] size-[16px] to-50% to-[#f0f0f0] top-[19px]" data-name="Icons" />;
}

function Container53() {
  return (
    <div className="absolute h-[53px] left-0 overflow-clip rounded-[12px] top-[-53px] w-[350px]" data-name="Container">
      <Icons2 />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] left-0 rounded-[20px] to-50% to-[#f0f0f0] top-[20px] w-[286px]" data-name="Rectangle" />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#f7f8f9] h-[225px] left-0 rounded-[12px] top-[61px] w-[350px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function DisclosureAccordion1() {
  return (
    <div className="absolute h-[286px] left-0 top-[361px] w-[350px]" data-name="Disclosure / Accordion">
      <Container54 />
    </div>
  );
}

function AccordionContent() {
  return (
    <div className="absolute h-[647px] left-0 top-[36px] w-[350px]" data-name="Accordion Content">
      <DisclosureAccordion />
      <DisclosureAccordion1 />
    </div>
  );
}

function AccordionContainer() {
  return (
    <div className="h-[683px] relative shrink-0 w-[350px]" data-name="Accordion Container">
      <TextSectionTitle3 />
      <AccordionContent />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center justify-center left-1/2 top-[151px] translate-x-[-50%] w-[390px]" data-name="Main Container">
      <CardDealCard />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-[390px]" data-name="Divider" />
      <TextComponent />
      <CardCore />
      <CardWorry />
      <ListList />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-[390px]" data-name="Divider" />
      <AccordionContainer />
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

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] w-[390px]" data-name="Common / Bottom Button">
      <Container55 />
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

function Icons3() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="Icons">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-0 rounded-[24px] size-[24px] to-50% to-[#f0f0f0] top-0" data-name="Rectangle" />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="absolute left-0 rounded-[12px] size-[44px] top-0" data-name="Left Action">
      <Icons3 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents left-0 top-0" data-name="home-2">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-px rounded-[22px] size-[22px] to-50% to-[#f0f0f0] top-px" data-name="Rectangle" />
      <div className="absolute h-[3px] left-[12px] rounded-[3px] top-[14.99px] w-0" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-0 rounded-[24px] size-[24px] to-50% to-[#f0f0f0] top-0" data-name="Rectangle" />
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Box">
      <Home />
    </div>
  );
}

function Icons4() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="Icons">
      <Box />
    </div>
  );
}

function RightAction() {
  return (
    <div className="absolute left-[322px] rounded-[12px] size-[44px] top-0" data-name="Right Action">
      <Icons4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[44px] left-[12px] top-[4px] w-[366px]" data-name="Icon">
      <LeftAction />
      <RightAction />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[16px] left-[113px] rounded-[20px] to-50% to-[#f0f0f0] top-[14px] w-[140px]" data-name="Rectangle" />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="absolute bg-white h-[52px] left-0 top-0 w-[390px]" data-name="Navigation / Top Bar">
      <Icon />
    </div>
  );
}

function NavigationTabItem() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[36px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[119.333px]" data-name="Navigation / Tab Item" />;
}

function NavigationTabItem1() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[12px] top-0 w-[119.333px]" data-name="Navigation / Tab Item">
      <NavigationTabItem />
    </div>
  );
}

function NavigationTabItem2() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[36px] left-[119.33px] rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[119.333px]" data-name="Navigation / Tab Item" />;
}

function NavigationTabItem3() {
  return <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[36px] left-[0.33px] rounded-[12px] to-50% to-[#f0f0f0] top-0 w-[119.333px]" data-name="Navigation / Tab Item" />;
}

function NavigationTabItem4() {
  return (
    <div className="absolute h-[36px] left-[238.67px] rounded-[12px] top-0 w-[119.333px]" data-name="Navigation / Tab Item">
      <NavigationTabItem3 />
    </div>
  );
}

function TabItem() {
  return (
    <div className="absolute h-[36px] left-[16px] overflow-clip top-[8px] w-[358px]" data-name="Tab Item">
      <NavigationTabItem1 />
      <NavigationTabItem2 />
      <NavigationTabItem4 />
    </div>
  );
}

function NavigationTabBar() {
  return (
    <div className="absolute bg-white h-[52px] left-0 top-[52px] w-[390px]" data-name="Navigation / Tab Bar">
      <TabItem />
    </div>
  );
}

function NavigationTopNavigationWidget() {
  return (
    <div className="h-[104px] relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <NavigationTabBar />
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
    <div className="bg-white relative size-full" data-name="상품 설명 (펼침 상태)">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <MainContainer />
      <CommonBottomButton />
    </div>
  );
}