import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4 from "figma:asset/67f3616aab1dcdea805228bdd4e698e8f57dd487.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function CardBrowseCardListHelper() {
  return (
    <div className="h-0 relative shrink-0 w-[350px]">
      <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
          <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
        </svg>
      </div>
    </div>
  );
}

function GeminiGeneratedImageE2Poh7E2Poh7E2PoImage() {
  return (
    <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4} />
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
    </div>
  );
}
type LabelBoxTextProps = {
  text: string;
};

function LabelBoxText({ text }: LabelBoxTextProps) {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">{text}</p>
    </Wrapper>
  );
}

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이런 운세는 어때요?</p>
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

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ContainerText text="내 곁의 사람, 다른 이에게 끌리고 있을까?" />
      <LabelBoxText text="심화 해석판" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Container1 />
    </div>
  );
}

function CardBrowseCard() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container2 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <Wrapper>
      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow h-[47px] leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black tracking-[-0.3px]">혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.</p>
    </Wrapper>
  );
}

function LabelBox() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">무료 체험판</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TitleContainer1 />
      <LabelBox />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Content />
    </div>
  );
}

function CardBrowseCard1() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ContainerText text="바람의 징조, 이미 시작 됐을까?" />
      <LabelBoxText text="심화 해석판" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Container4 />
    </div>
  );
}

function CardBrowseCard2() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container5 />
    </div>
  );
}

function CardBrowseCardList() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Card / Browse Card List">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-0 relative w-full">
          <CardBrowseCardListHelper />
          <CardBrowseCard />
          <CardBrowseCardListHelper />
          <CardBrowseCard1 />
          <CardBrowseCardListHelper />
          <CardBrowseCard2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full">
      <TextSectionTitle />
      <CardBrowseCardList />
    </div>
  );
}