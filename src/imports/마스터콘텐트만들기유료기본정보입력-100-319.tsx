import svgPaths from "./svg-cdv3npygs7";

function Frame({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="h-[16px] relative shrink-0 w-[8px]">
        <div className="absolute inset-[-3.31%_-13.26%_-3.31%_-6.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
            <path d={svgPaths.pdb11c00} id="Vector 4" stroke="var(--stroke-0, #79808A)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  radio?: boolean;
};

function Component({ className, radio = false }: ComponentProps) {
  if (radio) {
    return (
      <div className={className} data-name="radio=on">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #4688F1)" id="Ellipse 88" r="10" />
        </svg>
        <div className="absolute inset-[20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, white)" id="Ellipse 89" r="6" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="radio=off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" fill="var(--fill-0, #C7C7C7)" id="Ellipse 88" r="10" />
      </svg>
      <div className="absolute inset-[5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 89" r="9" />
        </svg>
      </div>
    </div>
  );
}

function Component1({ className }: { className?: string }) {
  return (
    <div className={className} data-name="마스터 콘텐트 만들기_유료_기본정보 입력">
      <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative shrink-0 w-[430px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
              <div className="relative shrink-0 size-[24px]" data-name="• Icons">
                <div className="absolute contents inset-0" data-name="Box">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="arrow-left">
                      <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
                      <g id="Vector_2" opacity="0"></g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.7px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1b1b1b] text-[20px] text-center text-nowrap tracking-[-0.2px]">마스터 콘텐츠 만들기</p>
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="relative size-[20px]" data-name="아이콘 메인">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_100_396)" id="ìì´ì½ ë©ì¸">
                        <g id="Vector" opacity="0.36"></g>
                        <g id="Group 2472">
                          <path d={svgPaths.p367f85c0} id="Vector_2" stroke="var(--stroke-0, #030303)" strokeLinecap="round" strokeWidth="2" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_100_396">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[15px] h-[600px] items-start overflow-clip pb-[20px] pl-[30px] pr-[20px] pt-[35px] relative shrink-0 w-[430px]">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
          <p className="leading-[20px]">기본 정보</p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="라디오 버튼">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" fill="var(--fill-0, #48B2AF)" id="Ellipse 88" r="10" />
              </svg>
            </div>
            <div className="absolute inset-[20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <circle cx="6" cy="6" fill="var(--fill-0, white)" id="Ellipse 89" r="6" />
              </svg>
            </div>
          </div>
          <Component className="[grid-area:1_/_1] ml-[81px] mt-0 relative size-[20px]" />
          <div className="[grid-area:1_/_1] flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center ml-[40.5px] mt-[10px] not-italic relative text-[12px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[20px] whitespace-pre">유료</p>
          </div>
          <div className="[grid-area:1_/_1] flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center ml-[121.5px] mt-[10px] not-italic relative text-[12px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[20px] whitespace-pre">무료</p>
          </div>
        </div>
        <div className="h-[40px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">대분류</p>
            <div className="absolute flex items-center justify-center left-[330px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[90deg]">
                <Frame className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative size-[30px]" />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[40px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">중분류</p>
            <div className="absolute flex items-center justify-center left-[330px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[90deg]">
                <Frame className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative size-[30px]" />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[60px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">질문자 정보</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[40px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">콘텐츠 제목</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[100px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">콘텐츠 소개글</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[60px] relative rounded-[8px] shrink-0 w-[370px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#a7a7a7] text-[14px] text-nowrap top-[12px] whitespace-pre">사용자 고민글</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="bg-white h-[280px] relative shrink-0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-full items-start pb-[1548px] pt-[20px] px-[35px] relative">
            <div className="absolute bg-[#48b2af] bottom-[100px] content-stretch flex items-center justify-center left-[35px] overflow-clip px-[89px] py-[13px] rounded-[8px] w-[360px]">
              <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">다음</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component2() {
  return <Component1 className="bg-[#f9f9f9] content-stretch flex flex-col items-center relative size-full" />;
}