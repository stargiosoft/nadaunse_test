import svgPaths from "./svg-zmbpe8z3px";
import clsx from "clsx";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4 from "figma:asset/15cbc23fdc3c42dfec3751fe87624e97923cb467.png";
import img1111331 from "figma:asset/b236509a5f2172bc63b883ba8abf132659ed54d9.png";
import imgGeminiGeneratedImageE2Poh7E2Poh7E2Po5 from "figma:asset/67f3616aab1dcdea805228bdd4e698e8f57dd487.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function TextComponent({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

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
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po5} />
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
    </div>
  );
}
type LabelBoxText1Props = {
  text: string;
};

function LabelBoxText1({ text }: LabelBoxText1Props) {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">{text}</p>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">{text}</p>
    </div>
  );
}
type LabelBoxTextProps = {
  text: string;
};

function LabelBoxText({ text }: LabelBoxTextProps) {
  return (
    <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap">{text}</p>
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

function LabelBox() {
  return (
    <div className="bg-[#e7e7e7] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d6d6d] text-[12px] text-nowrap tracking-[-0.24px]">무료 체험판</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <LabelBox />
      <ContainerText text="내 곁의 사람, 다른 이에게 끌리고 있을까?" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Container">
      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgGeminiGeneratedImageE2Poh7E2Poh7E2Po4} />
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>
      <Container />
    </div>
  );
}

function ListContentsProductCard() {
  return (
    <div className="bg-[#f7f8f9] relative shrink-0 w-full" data-name="List / Contents Product card">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <Wrapper>
      <Text text="지금 그의 마음은 여전히 내 곁에 머물고 있을까?" />
    </Wrapper>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBoxText text="Q1" />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ContainerText1 text="사주 흐름을 보면 기본적으로 인연의 끌림은 유지되고 있습니다. 다만 월운(月運)의 기운이 변하는 시기라, 마음이 흔들리거나 외부에 시선이 갈 가능성이 있습니다. 그러나 이는 일시적인 기류일 뿐, 본질적인 마음은 여전히 당신 곁에 머무르는 모습이 강하게 보입니다." />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function TextComponent1() {
  return (
    <TextComponent>
      <Container5 />
    </TextComponent>
  );
}

function Container6() {
  return (
    <Wrapper>
      <Text text="혹시 다른 사람에게 마음이 기울고 있는 건 아닐까?" />
    </Wrapper>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBoxText text="Q2" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ContainerText1 text="상대방의 사주 속 정인(正印)과 관성(官星) 흐름을 보면, 기본적으로 안정과 책임감을 중시하는 기운이 있습니다. 다른 사람에게 쉽게 빠지는 성향은 강하지 않지만, 작은 유혹이나 새로운 자극에는 흔들릴 수 있는 약한 틈이 있습니다. 신뢰를 유지하고 대화를 이어가는 것이 중요합니다." />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function TextComponent3() {
  return (
    <TextComponent>
      <Container9 />
    </TextComponent>
  );
}

function Container10() {
  return (
    <Wrapper>
      <Text text="앞으로 우리의 관계는 안정적으로 이어질까, 흔들리게 될까?" />
    </Wrapper>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <LabelBoxText text="Q3" />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ContainerText1 text="세운(歲運)의 기운은 전반적으로 평온한 흐름을 보입니다. 다만 작은 사건이나 오해가 생기면 균열로 번질 수 있으니, 지금은 서로의 마음을 자주 확인하고 안정감을 주는 것이 필요합니다. 올바른 신뢰를 쌓는다면 장기적으로는 안정된 인연으로 이어질 가능성이 큽니다." />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function TextComponent2() {
  return (
    <TextComponent>
      <Container13 />
    </TextComponent>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <TextComponent1 />
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
      <TextComponent3 />
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
      <TextComponent2 />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Block">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">월급쟁이에서 벗어나, 대박의 길로</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#848484] text-[13px] tracking-[-0.26px] w-full">퇴사 후 대박 터질 타이밍 알려드립니다.</p>
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

function Container14() {
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
    <div className="bg-[#f8f8f8] relative shrink-0 w-full" data-name="Promotion / Promo Banner">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text text="이런 운세는 어때요?" additionalClassNames="justify-center" />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Text / Section Title">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ContainerText text="내 곁의 사람, 다른 이에게 끌리고 있을까?" />
      <LabelBoxText1 text="심화 해석판" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Container16 />
    </div>
  );
}

function CardBrowseCard() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container17 />
    </div>
  );
}

function TitleContainer() {
  return (
    <Wrapper>
      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow h-[47px] leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black tracking-[-0.3px]">혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.</p>
    </Wrapper>
  );
}

function LabelBox1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">무료 체험판</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TitleContainer />
      <LabelBox1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Content1 />
    </div>
  );
}

function CardBrowseCard1() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ContainerText text="바람의 징조, 이미 시작 됐을까?" />
      <LabelBoxText1 text="심화 해석판" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <GeminiGeneratedImageE2Poh7E2Poh7E2PoImage />
      <Container19 />
    </div>
  );
}

function CardBrowseCard2() {
  return (
    <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
      <Container20 />
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <TextSectionTitle />
      <CardBrowseCardList />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 w-full">
      <Frame2 />
      <PromotionPromoBanner />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 top-[99px] w-[390px]">
      <ListContentsProductCard />
      <Frame4 />
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

function Frame() {
  return (
    <div className="absolute bottom-[-907px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]">
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

function Box1() {
  return (
    <Wrapper1>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Wrapper1>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons />
    </div>
  );
}

function LinearClose() {
  return (
    <Wrapper1>
      <g id="Box">
        <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Wrapper1>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">상세 풀이</p>
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

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
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
    </div>
  );
}