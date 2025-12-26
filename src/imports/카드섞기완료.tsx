import svgPaths from "./svg-2ceo3nu4m2";
import imgCardBack3Png from "figma:asset/2684ee91bb3c210668e275898c46ae5b78876d94.png";
import imgContainer from "figma:asset/94f10ef13a4a58b883141ee9e5cc8cd09f7f938c.png";
import imgContainer1 from "figma:asset/59943427542c4f6da46a0008de20cc3e80cf0382.png";
import imgContainer2 from "figma:asset/a9391acb9a240be63b73cc95e57e04127095b020.png";
import imgGeminiGeneratedImageHup6Mshup6Mshup61 from "figma:asset/e1537c8771a828aa09f2f853176e35c41217f557.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Box({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-[100.01%] w-[-100%]" src={imgContainer1} />
    </div>
  );
}

function CardBack3PngImage3() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-full w-[-99.99%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function CardBack3PngImage2() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100%] left-full max-w-none top-full w-[-99.99%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function CardBack3PngImage1() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-full max-w-none size-[-100%] top-full" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-[100.01%] w-[-100%]" src={imgContainer} />
    </div>
  );
}

function CardBack3PngImage() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-full w-[-100%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-[100.01%] w-[-100%]" src={imgCardBack3Png} />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#151515] text-[20px] tracking-[-0.2px] w-full">우리 관계, 지금이 전환점일까?</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#848484] text-[14px] tracking-[-0.42px] w-full">질문을 떠올리며 카드를 뽑아주세요</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 px-[20px] py-[10px] top-[115px] translate-x-[-50%] w-[390px]" data-name="Container">
      <Container />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">카드 섞기</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button Container">
      <ButtonSquareButton />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 px-[16px] py-[12px] top-[676px] translate-x-[-50%] w-[390px]" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function CardBack3Png() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-full max-w-none size-[-100.01%] top-full" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)]" data-name="Container">
      <Image />
      <CardBack3Png />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3PngImage />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3PngImage1 />
    </div>
  );
}

function CardBack3Png1() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <Image />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)]" data-name="Container">
      <Image1 />
      <CardBack3Png1 />
    </div>
  );
}

function CardBack3Png2() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100%] left-[100.01%] max-w-none top-full w-[-100.02%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png2 />
    </div>
  );
}

function CardBack3Png3() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100%] left-[99.99%] max-w-none top-full w-[-99.98%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png3 />
    </div>
  );
}

function CardBack3Png4() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <Image />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3PngImage2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3PngImage3 />
    </div>
  );
}

function CardBack3Png5() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100%] left-full max-w-none top-full w-[-100.01%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png5 />
    </div>
  );
}

function CardBack3Png6() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-full max-w-none size-[-100.01%] top-[100.01%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png6 />
    </div>
  );
}

function CardBack3Png7() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100.01%] left-[100.01%] max-w-none top-full w-[-100.02%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image1 />
      <CardBack3Png7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image2 />
      <CardBack3PngImage3 />
    </div>
  );
}

function CardBack3Png8() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100%] left-[99.99%] max-w-none top-full w-[-99.99%]" src={imgCardBack3Png} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image2 />
      <CardBack3Png8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image2 />
      <CardBack3PngImage1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image2 />
      <CardBack3PngImage />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[-100.01%] left-full max-w-none top-[100.01%] w-[-100%]" src={imgContainer2} />
      </div>
      <CardBack3PngImage2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Image />
      <CardBack3PngImage3 />
    </div>
  );
}

function CardBack3Png9() {
  return (
    <div className="h-[75px] relative shrink-0 w-[45px]" data-name="card_back_3.png">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardBack3Png} />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <CardBack3Png9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[120px] mb-[-20px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bottom-[37.72%] flex items-center justify-center left-[calc(50%-114.59px)] top-[0.72%] translate-x-[-50%]">
        <div className="flex-none h-[69.951px] rotate-[39.037deg] skew-x-[349.813deg] w-[45px]">
          <Container3 />
        </div>
      </div>
      <div className="absolute flex inset-[5.58%_68.88%_34.39%_6.11%] items-center justify-center">
        <div className="flex-none h-[72.318px] rotate-[32.63deg] skew-x-[345.408deg] w-[43.355px]">
          <Container4 />
        </div>
      </div>
      <div className="absolute flex inset-[9.73%_65.93%_29.61%_9.8%] items-center justify-center">
        <div className="flex-none h-[70.888px] rotate-[28.824deg] skew-x-[345.886deg] w-[44.125px]">
          <Container5 />
        </div>
      </div>
      <div className="absolute flex inset-[13.61%_63.03%_25.43%_13.57%] items-center justify-center">
        <div className="flex-none h-[69.493px] rotate-[25.146deg] skew-x-[346.646deg] w-[44.847px]">
          <Container5 />
        </div>
      </div>
      <div className="absolute bottom-[21.4%] flex items-center justify-center left-[calc(50%-70.73px)] top-[16.74%] translate-x-[-50%]">
        <div className="flex-none h-[66.391px] rotate-[23.375deg] skew-x-[351.599deg] w-[45px]">
          <Container6 />
        </div>
      </div>
      <div className="absolute flex inset-[20.49%_57.42%_18.93%_21.3%] items-center justify-center">
        <div className="flex-none h-[66.957px] rotate-[18.109deg] skew-x-[348.995deg] w-[46.093px]">
          <Container7 />
        </div>
      </div>
      <div className="absolute flex inset-[23.43%_54.71%_16.65%_25.25%] items-center justify-center">
        <div className="flex-none h-[65.887px] rotate-[14.721deg] skew-x-[350.563deg] w-[46.596px]">
          <Container8 />
        </div>
      </div>
      <div className="absolute flex inset-[26.05%_52.04%_15.04%_29.26%] items-center justify-center">
        <div className="flex-none h-[64.978px] rotate-[11.398deg] skew-x-[352.367deg] w-[47.009px]">
          <Container9 />
        </div>
      </div>
      <div className="absolute flex inset-[28.3%_49.42%_14.1%_33.32%] items-center justify-center">
        <div className="flex-none h-[64.282px] rotate-[8.127deg] skew-x-[354.373deg] w-[47.326px]">
          <Container10 />
        </div>
      </div>
      <div className="absolute flex inset-[30.19%_46.85%_13.83%_37.42%] items-center justify-center">
        <div className="flex-none h-[63.796px] rotate-[4.892deg] skew-x-[356.535deg] w-[47.54px]">
          <Container11 />
        </div>
      </div>
      <div className="absolute flex inset-[31.69%_44.31%_14.25%_41.57%] items-center justify-center">
        <div className="flex-none h-[63.549px] rotate-[1.679deg] skew-x-[358.797deg] w-[47.649px]">
          <Container12 />
        </div>
      </div>
      <div className="absolute flex inset-[31.76%_41.01%_14.29%_44.95%] items-center justify-center">
        <div className="flex-none h-[63.536px] rotate-[358.474deg] skew-x-[1.094deg] w-[47.652px]">
          <Container13 />
        </div>
      </div>
      <div className="absolute flex inset-[30.27%_36.86%_13.84%_47.48%] items-center justify-center">
        <div className="flex-none h-[63.778px] rotate-[355.262deg] skew-x-[3.359deg] w-[47.547px]">
          <Container14 />
        </div>
      </div>
      <div className="absolute flex inset-[28.4%_32.75%_14.07%_50.05%] items-center justify-center">
        <div className="flex-none h-[64.251px] rotate-[352.028deg] skew-x-[5.527deg] w-[47.338px]">
          <Container15 />
        </div>
      </div>
      <div className="absolute flex inset-[26.17%_28.69%_14.97%_52.67%] items-center justify-center">
        <div className="flex-none h-[64.947px] rotate-[348.759deg] skew-x-[7.542deg] w-[47.027px]">
          <Container16 />
        </div>
      </div>
      <div className="absolute flex inset-[23.57%_24.68%_16.56%_55.34%] items-center justify-center">
        <div className="flex-none h-[65.842px] rotate-[345.439deg] skew-x-[9.356deg] w-[46.618px]">
          <Container17 />
        </div>
      </div>
      <div className="absolute flex inset-[20.63%_20.72%_18.81%_58.06%] items-center justify-center">
        <div className="flex-none h-[66.9px] rotate-[342.054deg] skew-x-[10.936deg] w-[46.119px]">
          <Container18 />
        </div>
      </div>
      <div className="absolute flex inset-[17.37%_16.83%_21.7%_60.83%] items-center justify-center">
        <div className="flex-none h-[68.112px] rotate-[338.588deg] skew-x-[12.259deg] w-[45.536px]">
          <Container5 />
        </div>
      </div>
      <div className="absolute flex inset-[9.92%_9.23%_29.4%_66.55%] items-center justify-center">
        <div className="flex-none h-[70.818px] rotate-[331.354deg] skew-x-[14.084deg] w-[44.161px]">
          <Container19 />
        </div>
      </div>
      <div className="absolute flex inset-[5.78%_5.53%_34.16%_69.5%] items-center justify-center">
        <div className="flex-none h-[72.247px] rotate-[327.555deg] skew-x-[14.575deg] w-[43.393px]">
          <Container20 />
        </div>
      </div>
      <div className="absolute flex inset-[1.4%_1.89%_39.48%_72.52%] items-center justify-center">
        <div className="flex-none h-[73.688px] rotate-[323.616deg] skew-x-[14.784deg] w-[42.589px]">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] pt-0 px-0 relative shrink-0 w-full">
      <div className="h-[159px] mb-[-20px] relative shrink-0 w-[129.887px]" data-name="Gemini_Generated_Image_hup6mshup6mshup6 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.9%] left-[-151.97%] max-w-none top-[-13.68%] w-[441.38%]" src={imgGeminiGeneratedImageHup6Mshup6Mshup61} />
        </div>
      </div>
      <Container22 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[255px] translate-x-[-50%] w-[360px]">
      <Frame />
      <div className="h-[114px] relative rounded-[12px] shrink-0 w-[66px]">
        <div aria-hidden="true" className="absolute border border-[#e4f7f7] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[18.75%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
        <g id="Group">
          <path d={svgPaths.p14150900} fill="var(--fill-0, #848484)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18646500} fill="var(--fill-0, #848484)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons">
      <Group />
    </div>
  );
}

function ButtonIconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons />
    </div>
  );
}

function PageIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page Indicator">
      <ButtonIconButton />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.5px] relative shrink-0 text-[#b7b7b7] text-[0px] text-[15px] text-nowrap tracking-[-0.3px]">
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[#151515]">03/</span>
        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold"> </span>10
      </p>
    </div>
  );
}

function Box1() {
  return (
    <Box>
      <g id="arrow-left">
        <path d={svgPaths.p2679d700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Box>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <Icons1 />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px]">이전</p>
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ButtonContainer2 />
    </div>
  );
}

function Box2() {
  return (
    <Box>
      <g id="arrow-right">
        <path d={svgPaths.p3117bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <g id="Vector_2" opacity="0"></g>
      </g>
    </Box>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px]">다음</p>
      <Icons2 />
    </div>
  );
}

function ButtonTextButton1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <ButtonContainer3 />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navigation Buttons">
      <ButtonTextButton />
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute inset-[-4.17%_-0.5px]" style={{ "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
            <path d="M0.5 0.5V12.5" id="Vector 30" stroke="var(--stroke-0, #E7E7E7)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <ButtonTextButton1 />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation Bar">
      <PageIndicator />
      <NavigationButtons />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[28px] py-[12px] relative w-full">
          <NavigationBar />
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

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <HomeIndicatorContainer />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[390px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[11.335px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
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

function Box3() {
  return (
    <Wrapper>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Wrapper>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons3 />
    </div>
  );
}

function LinearClose() {
  return (
    <Wrapper>
      <g id="Box">
        <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Wrapper>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <LinearClose />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
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
    <div className="bg-white relative size-full" data-name="카드 섞기 완료">
      <Container25 />
      <TopNavigationContainer />
      <div className="absolute bg-[#48b2af] border-[#151515] border-[2px_0px_0px] border-solid h-[287px] left-0 top-[389px] w-[390px]" data-name="Card" />
      <Container1 />
      <Container2 />
      <Frame1 />
    </div>
  );
}