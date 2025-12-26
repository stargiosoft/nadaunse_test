import svgPaths from "./svg-t3f39cjdw9";
import imgImage3 from "figma:asset/109fdfa0419a760edc046c425271b784e05bbb65.png";

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="• Icons">
      <Box />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
      <Icons />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <IconButton />
    </div>
  );
}

function Component() {
  return (
    <div className="relative size-[20px]" data-name="아이콘 메인">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_142_1133)" id="ìì´ì½ ë©ì¸">
          <g id="Vector" opacity="0.36"></g>
          <g id="Group 2472">
            <path d={svgPaths.p367f85c0} id="Vector_2" stroke="var(--stroke-0, #030303)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_142_1133">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Component />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <IconButton1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.7px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1b1b1b] text-[20px] text-center text-nowrap tracking-[-0.2px]">마스터 콘텐츠 리스트</p>
      <Frame1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative shrink-0 w-[430px]">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-[110px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative size-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">배포선택</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#48b2af] h-[40px] relative rounded-[8px] shrink-0 w-[170px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative size-full">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white">파일로 등록하기</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip px-[20px] py-[15px] relative shrink-0 w-[430px]">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#151515] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px]">종합</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px]">심화 해석판</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] text-center text-nowrap tracking-[-0.42px]">
            <p className="leading-[22px]">무료 체험판</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full" data-name="Segmented Control">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[6px] relative w-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function NavigationSegmentedControl() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navigation / Segmented Control">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
          <SegmentedControl />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[16px] w-[209px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[11px] w-full">
        <p className="leading-[13.75px]">[무료] 2025.09.04 10:18</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[34px] w-[209px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
        <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[15px] top-[16px]">
      <Container />
      <Heading />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal]">실패</p>
      </div>
    </div>
  );
}

function IconBackSvg() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon_back.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_73_3248)" id="icon_back.svg">
          <path d={svgPaths.pde8da40} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
          <path d="M14.917 8H1.91699" id="Vector_2" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
        <defs>
          <clipPath id="clip0_73_3248">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconBackSvgFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon_back.svg fill">
      <IconBackSvg />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[14px]" data-name="Image">
      <IconBackSvgFill />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[14px]">
        <div className="flex-none rotate-[180deg]">
          <Image />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[146px] items-center left-[136px] px-0 py-[8px] top-[55px] w-[209px]">
      <Frame11 />
      <Group1 />
    </div>
  );
}

function Frame17() {
  return <div className="absolute bg-white h-[77px] left-[13px] rounded-[8px] top-[16px] w-[115px]" />;
}

function Background() {
  return (
    <div className="bg-[#f0f8f8] h-[109px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Background">
      <Group />
      <Frame3 />
      <Frame17 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[16px] w-[209px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[11px] w-full">
        <p className="leading-[13.75px]">[무료] 2025.09.04 10:18</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[34px] w-[209px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
        <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents right-[15px] top-[16px]">
      <Container1 />
      <Heading1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal]">배포완료</p>
      </div>
    </div>
  );
}

function IconBackSvg1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon_back.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_73_3248)" id="icon_back.svg">
          <path d={svgPaths.pde8da40} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
          <path d="M14.917 8H1.91699" id="Vector_2" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
        <defs>
          <clipPath id="clip0_73_3248">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconBackSvgFill1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon_back.svg fill">
      <IconBackSvg1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[14px]" data-name="Image">
      <IconBackSvgFill1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[14px]">
        <div className="flex-none rotate-[180deg]">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[121px] items-center left-[136px] px-0 py-[8px] top-[55px] w-[209px]">
      <Frame12 />
      <Group3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white h-[77px] left-[13px] overflow-clip rounded-[8px] top-[16px] w-[115px]">
      <div className="absolute aspect-[1248/832] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0f8f8] h-[109px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Background">
      <Group2 />
      <Frame4 />
      <Frame18 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[16px] w-[209px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[11px] w-full">
        <p className="leading-[13.75px]">[무료] 2025.09.04 10:18</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[34px] w-[209px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
        <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents right-[15px] top-[16px]">
      <Container2 />
      <Heading2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal]">배포전</p>
      </div>
    </div>
  );
}

function IconBackSvg2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon_back.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_73_3248)" id="icon_back.svg">
          <path d={svgPaths.pde8da40} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
          <path d="M14.917 8H1.91699" id="Vector_2" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
        <defs>
          <clipPath id="clip0_73_3248">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconBackSvgFill2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon_back.svg fill">
      <IconBackSvg2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[14px]" data-name="Image">
      <IconBackSvgFill2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[14px]">
        <div className="flex-none rotate-[180deg]">
          <Image2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[136px] px-0 py-[8px] top-[55px] w-[209px]">
      <Frame13 />
      <Group5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white h-[77px] left-[13px] overflow-clip rounded-[8px] top-[16px] w-[115px]">
      <div className="absolute aspect-[1248/832] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f8f8] h-[109px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Background">
      <Group4 />
      <Frame5 />
      <Frame19 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[16px] w-[209px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[11px] w-full">
        <p className="leading-[13.75px]">[무료] 2025.09.04 10:18</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[15px] top-[34px] w-[209px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
        <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents right-[15px] top-[16px]">
      <Container3 />
      <Heading3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal]">로딩전</p>
      </div>
    </div>
  );
}

function IconBackSvg3() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon_back.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_73_3248)" id="icon_back.svg">
          <path d={svgPaths.pde8da40} id="Vector" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
          <path d="M14.917 8H1.91699" id="Vector_2" stroke="var(--stroke-0, #1B1B1B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        </g>
        <defs>
          <clipPath id="clip0_73_3248">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconBackSvgFill3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon_back.svg fill">
      <IconBackSvg3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[14px]" data-name="Image">
      <IconBackSvgFill3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[14px]">
        <div className="flex-none rotate-[180deg]">
          <Image3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[136px] px-0 py-[8px] top-[55px] w-[209px]">
      <Frame15 />
      <Group7 />
    </div>
  );
}

function Frame20() {
  return <div className="absolute bg-white h-[77px] left-[13px] rounded-[8px] top-[16px] w-[115px]" />;
}

function Background3() {
  return (
    <div className="bg-[#f0f8f8] h-[109px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Background">
      <Group6 />
      <Frame6 />
      <Frame20 />
    </div>
  );
}

function Component1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="아이콘 메인">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 1935">
          <g id="Vector" opacity="0.36"></g>
          <g id="Group 2497">
            <path d={svgPaths.p2c61ef00} fill="var(--fill-0, #FFD392)" id="Vector_2" />
            <path d={svgPaths.p25b4ca00} fill="var(--fill-0, #FED6C9)" id="Vector_3" />
            <path d={svgPaths.p28154740} fill="var(--fill-0, #3B3B3B)" id="Vector_4" />
            <path d={svgPaths.p354b87f1} fill="var(--fill-0, #FFB950)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#48b2af] bottom-[83px] content-stretch flex gap-[5px] h-[40px] items-center justify-center left-[232px] overflow-clip px-[15px] py-[10px] rounded-[30px]">
      <Component1 />
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white">콘텐츠 만들기</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-[314px] overflow-clip relative shrink-0 w-[388px]">
      <Frame7 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[810px] relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[20px] relative size-full">
          <Background />
          <Background1 />
          <Background2 />
          <Background3 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="마스터 콘텐츠 리스트">
      <Frame16 />
      <Frame10 />
      <NavigationSegmentedControl />
      <Main />
    </div>
  );
}