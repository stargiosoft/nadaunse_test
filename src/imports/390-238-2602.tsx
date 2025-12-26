import svgPaths from "./svg-lvh7lrzh06";
import imgSwords11Png from "figma:asset/2ced5a86877d398cd3930c1ef08e032cadaa48d4.png";

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[20px] pt-[32px] px-[20px] relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[17px] text-black text-center tracking-[-0.34px]">아래는 일부 예시 해석입니다</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">01. 내 사랑, 오래 지속될 인연일까?</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container3 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[#525252] text-[15px] tracking-[-0.3px] w-full">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다. 당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Item />
      <Item1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f9f9f9] h-[252px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <TextSectionTitle />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="Container">
      <Container6 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">여기까지만 공개돼요</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Icons />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col inset-[80.55%_0_0_0] items-center justify-center p-[16px] rounded-bl-[16px] rounded-br-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
      <Container10 />
    </div>
  );
}

function CardAnswerPreviewCard() {
  return (
    <div className="h-[293px] relative shrink-0 w-[350px]" data-name="Card / Answer Preview Card">
      <Container7 />
      <Container11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <CardAnswerPreviewCard />
      <div className="h-0 relative shrink-0 w-[390px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <path d="M0 0.5H390" id="Vector 45" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">02. 이 감정, 스쳐가는 바람일까 진짜일까?</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container13 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[25.5px] relative shrink-0 text-[#525252] text-[15px] tracking-[-0.3px] w-full">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다. 당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f9f9f9] h-[252px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <TextSectionTitle1 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="Container">
      <Container16 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">여기까지만 공개돼요</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Icons1 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col inset-[80.55%_0_0_0] items-center justify-center p-[16px] rounded-bl-[16px] rounded-br-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
      <Container20 />
    </div>
  );
}

function CardAnswerPreviewCard1() {
  return (
    <div className="h-[293px] relative shrink-0 w-[350px]" data-name="Card / Answer Preview Card">
      <Container17 />
      <Container21 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <CardAnswerPreviewCard1 />
      <div className="h-0 relative shrink-0 w-[390px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <path d="M0 0.5H390" id="Vector 45" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">03. 우리 관계, 지금이 전환점일까?</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function TextSectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container23 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
    </div>
  );
}

function Swords11Png() {
  return (
    <div className="h-[156px] relative rounded-[12px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[90px]" data-name="Swords11.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSwords11Png} />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Swords11Png />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[25.5px] min-w-full relative shrink-0 text-[#525252] text-[15px] tracking-[-0.3px] w-[min-content]">이 카드는 호기심과 탐구심, 그리고 진실을 알고자 하는 열망을 상징합니다. 상대방을 향한 당신의 관심이 깊어지고 있으며, 마음속에 질문이 많아지는 시기일 수 있습니다. 다만, 모든 것을 성급히 판단하기보다 관찰하고 배워가야 할 때입니다. 말과 행동에서 솔직함이 중요하며, 작은 오해를 바로잡는 데 힘쓰면 관계가 훨씬 안정될 수 있습니다.</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f9f9f9] h-[400px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <TextSectionTitle2 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="Container">
      <Container28 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">여기까지만 공개돼요</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Icons2 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[57px] items-center justify-center left-0 p-[16px] right-0 rounded-bl-[16px] rounded-br-[16px] top-[calc(50%+192px)] translate-y-[-50%]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
      <Container32 />
    </div>
  );
}

function CardAnswerPreviewCard2() {
  return (
    <div className="h-[441px] relative shrink-0 w-[350px]" data-name="Card / Answer Preview Card">
      <Container29 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <CardAnswerPreviewCard2 />
      <div className="h-0 relative shrink-0 w-[390px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <path d="M0 0.5H390" id="Vector 45" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">04. 그 사람의 마음, 진심일까 순간일까?</p>
    </div>
  );
}

function ListListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons3 />
      <Container35 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">05. 잠시 스치는 인연일까, 평생의 동반자일까?</p>
    </div>
  );
}

function ListListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons4 />
      <Container36 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">06. 사랑이 흔들리는 순간, 끝일까 새로운 시작일까?</p>
    </div>
  );
}

function ListListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons5 />
      <Container37 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">07. 내가 붙잡아야 할 사랑일까, 놓아야 할 인연일까?</p>
    </div>
  );
}

function ListListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons6 />
      <Container38 />
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">08. 내가 붙잡아야 할 사랑일까, 놓아야 할 인연일까?</p>
    </div>
  );
}

function ListListItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons7 />
      <Container39 />
    </div>
  );
}

function Icons8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">09. 그와 나, 운명처럼 이어질까?</p>
    </div>
  );
}

function ListListItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons8 />
      <Container40 />
    </div>
  );
}

function Icons9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pa7fece0} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          <path d={svgPaths.p1662d200} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
          <path d={svgPaths.p24fb2500} fill="var(--fill-0, #8BD4D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0" data-name="Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">10. 우리의 사랑, 위기일까 기회일까?</p>
    </div>
  );
}

function ListListItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List / List Item">
      <Icons9 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <ListListItem />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ListListItem6 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function ListList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[20px] py-0 relative shrink-0 w-[390px]" data-name="List / List">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative shrink-0 text-[#41a09e] text-[15px] text-center tracking-[-0.3px] w-full">더 깊은 풀이는 구매 후 확인할 수 있습니다</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-0 top-[151px] w-[390px]" data-name="Container">
      <Container1 />
      <Frame />
      <Frame1 />
      <Container34 />
      <ListList />
      <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" data-name="Divider" />
      <Container45 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">구매하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#48b2af] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button / Square Button">
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

function Container47() {
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
      <Container47 />
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

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-576px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
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

function Icons10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons10 />
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

function Icons11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons11 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
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

function NavigationTabItem() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#999] text-[15px] text-nowrap tracking-[-0.45px]">상품 설명</p>
        </div>
      </div>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#999] text-[15px] text-nowrap tracking-[-0.45px]">풀이 원리</p>
        </div>
      </div>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="basis-0 bg-[#f8f8f8] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#151515] text-[15px] text-nowrap tracking-[-0.45px]">맛보기</p>
        </div>
      </div>
    </div>
  );
}

function TabItem() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Tab Item">
      <NavigationTabItem />
      <NavigationTabItem1 />
      <NavigationTabItem2 />
    </div>
  );
}

function NavigationTabBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navigation / Tab Bar">
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
          <TabItem />
        </div>
      </div>
    </div>
  );
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
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
    <div className="bg-white relative size-full" data-name="390">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <Container46 />
      <CommonBottomButton />
    </div>
  );
}