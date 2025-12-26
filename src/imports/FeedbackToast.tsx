import svgPaths from "./svg-n2uwwwgpnx";

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d={svgPaths.p19b5fe00} fill="var(--fill-0, #46BB6F)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
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

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Icons />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[13px] text-nowrap text-white">수정되었습니다.</p>
    </div>
  );
}

export default function FeedbackToast() {
  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.5)] relative rounded-[999px] size-full" data-name="Feedback / Toast">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[12px] pr-[16px] py-[8px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}