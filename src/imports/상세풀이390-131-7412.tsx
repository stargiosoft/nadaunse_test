import svgPaths from "./svg-ww4n10vtuh";
import imgThumbnail from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";
import img1111331 from "figma:asset/b236509a5f2172bc63b883ba8abf132659ed54d9.png";

function LabelBox() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-full">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[2px] py-0 relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function CardPriceBlock() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card / PriceBlock">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end px-[20px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function CardDealCard() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Card / Deal Card">
      <div className="aspect-[391/270] relative shrink-0 w-full" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThumbnail} />
      </div>
      <CardPriceBlock />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <CardDealCard />
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 설명</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px]">
            언제부터인지, 그의 시선이 나 아닌 다른 곳에 머무는 것 같아 불안하지 않으신가요? 말 한마디, 작은 행동에도 혹시 마음이 흔들린 건 아닐까 의심되는 지금.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            겉으로만 보이는 관계의 온도에 속지 말고, 당신 곁에 있는 마음이 진짜 사랑인지, 아니면 흔들리는 바람 같은 감정인지 보이지 않던 진실의 단서를 지금 확인해 보실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function TextComponent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Component 3">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 구성</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">앞으로 이 관계는 안정적으로 이어질까, 흔들리게 될까?</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard_Variable:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[-0.32px]">
        <li className="ms-[24px]">
          <span className="leading-[28.5px] text-[16px]">&nbsp;</span>
        </li>
      </ul>
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function ListListItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List / List Item">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">의심과 불안을 줄이고 사랑을 지켜내려면 어떻게 해야 할까?</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard_Variable:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[-0.32px]">
        <li className="ms-[24px]">
          <span className="leading-[28.5px] text-[16px]">&nbsp;</span>
        </li>
      </ul>
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function ListListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List / List Item">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">지금 그의 마음은 나에게 머물고 있을까, 다른 곳을 향하고 있을까?</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard_Variable:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[-0.32px]">
        <li className="ms-[24px]">
          <span className="leading-[28.5px] text-[16px]">&nbsp;</span>
        </li>
      </ul>
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function ListListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List / List Item">
      <Container22 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <ListListItem />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <TextSectionTitle />
      <Frame2 />
    </div>
  );
}

function ListList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-0 relative shrink-0 w-[390px]" data-name="List / List">
      <Frame3 />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Text Block">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">월급쟁이에서 벗어나, 대박의 길로</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[19px] relative shrink-0 text-[#848484] text-[13px] tracking-[-0.26px] w-full">퇴사 후 대박 터질 타이밍 알려드립니다.</p>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p123b8a80} id="Vector_2" opacity="0" stroke="var(--stroke-0, #999999)" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Action">
      <Box />
    </div>
  );
}

function ImageAndIcon() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Image and Icon">
      <div className="h-[60px] relative shrink-0 w-[78px]" data-name="111133 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.46%] left-[-135.91%] max-w-none top-[-5.41%] w-[235.36%]" src={img1111331} />
        </div>
      </div>
      <Action />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextBlock />
      <ImageAndIcon />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function PromotionPromoBanner() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-start p-[20px] relative shrink-0 w-[390px]" data-name="Promotion / Promo Banner">
      <Container23 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이런 운세는 어때요?</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer1 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container24 />
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

function TitleContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25.5px] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">혹시 지금 바람 피우고 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer2 />
    </div>
  );
}

function OriginalPriceContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] line-through not-italic relative shrink-0 text-[#999999] text-[13px] text-nowrap whitespace-pre">25,800원</p>
    </div>
  );
}

function OriginalPriceContainer1() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer />
    </div>
  );
}

function OriginalPriceContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer1 />
    </div>
  );
}

function DiscountPriceContainer() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre" data-name="Discount Price Container">
      <p className="relative shrink-0 text-[#ff6678]">50%</p>
      <p className="relative shrink-0 text-black">12,900원</p>
    </div>
  );
}

function DiscountPriceContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Discount Price Container">
      <DiscountPriceContainer />
    </div>
  );
}

function CouponPriceContainer() {
  return (
    <div className="content-stretch flex gap-[2px] items-center not-italic relative shrink-0 text-[#48b2af] text-nowrap w-full whitespace-pre" data-name="Coupon Price Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">9,900원</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[11px]">쿠폰 적용가</p>
    </div>
  );
}

function PriceInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price Info">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start px-[2px] py-0 relative w-full">
          <OriginalPriceContainer2 />
          <DiscountPriceContainer1 />
          <CouponPriceContainer />
        </div>
      </div>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer3 />
      <PriceInfo />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox1 />
      <ProductInfo />
    </div>
  );
}

function CardPriceBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container25 />
    </div>
  );
}

function Container26() {
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
      <Container26 />
    </div>
  );
}

function LabelBox2() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
    </div>
  );
}

function TitleContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-px py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25.5px] not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">내 연인은 바람기 있을까?</p>
        </div>
      </div>
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <TitleContainer4 />
    </div>
  );
}

function OriginalPriceContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] line-through not-italic relative shrink-0 text-[#999999] text-[13px] text-nowrap whitespace-pre">25,800원</p>
    </div>
  );
}

function OriginalPriceContainer4() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer3 />
    </div>
  );
}

function OriginalPriceContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Original Price Container">
      <OriginalPriceContainer4 />
    </div>
  );
}

function DiscountPriceContainer2() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre" data-name="Discount Price Container">
      <p className="relative shrink-0 text-[#ff6678]">50%</p>
      <p className="relative shrink-0 text-black">12,900원</p>
    </div>
  );
}

function DiscountPriceContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Discount Price Container">
      <DiscountPriceContainer2 />
    </div>
  );
}

function CouponPriceContainer1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center not-italic relative shrink-0 text-[#48b2af] text-nowrap w-full whitespace-pre" data-name="Coupon Price Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">9,900원</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[11px]">쿠폰 적용가</p>
    </div>
  );
}

function PriceInfo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Price Info">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start px-[2px] py-0 relative w-full">
          <OriginalPriceContainer5 />
          <DiscountPriceContainer3 />
          <CouponPriceContainer1 />
        </div>
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
      <TitleContainer5 />
      <PriceInfo1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBox2 />
      <ProductInfo1 />
    </div>
  );
}

function CardPriceBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[200px]" data-name="Card / PriceBlock">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[120px] pointer-events-none relative rounded-[12px] shrink-0 w-[200px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <CardPriceBlock2 />
    </div>
  );
}

function CardDealCard2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card / Deal Card">
      <Container28 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-full items-center justify-center mr-[-20px] p-[12px] relative rounded-[12px] shrink-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-dashed border-neutral-300 inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25.5px] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">더 볼래요!</p>
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
      <Frame8 />
      <div className="flex items-center justify-center mr-[-20px] relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <CardDealCard1 />
      <CardDealCard2 />
      <ButtonMoreViewButton />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[350px]">
      <TextSectionTitle1 />
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center justify-center left-1/2 top-[99px] translate-x-[-50%] w-[390px]">
      <Frame4 />
      <TextComponent />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
      <ListList />
      <PromotionPromoBanner />
      <Frame7 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">지금 풀이보러 가기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#48b2af] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
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

function Container29() {
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
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container29 />
      <HomeIndicatorLight />
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
    <div className="absolute bottom-[-576px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]">
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

function Box1() {
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
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons1 />
    </div>
  );
}

function Box2() {
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

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
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
      <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
      <RightAction />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
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
    <div className="bg-white relative size-full" data-name="상세 풀이 _ 390">
      <Frame />
      <Frame1 />
      <Frame5 />
      <CommonBottomButton />
    </div>
  );
}